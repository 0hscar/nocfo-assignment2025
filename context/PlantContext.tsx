import React, { createContext, useState, ReactNode, useContext } from "react"

type Plant = {
    id: number
    name: string
    photo: string
    notes: string
    date: string
}

type PlantContextType = {
    plants: Plant[]
    addPlant: (newPlant: Plant) => void
    updatePlant: (updatedPlant: Plant) => void //For editing details, name etc
    removePlant: (plantId: number) => void // For delete
}

type PlantProviderProps = {
    children: ReactNode
}

export const PlantContext = createContext<PlantContextType | undefined>(undefined);

export const PlantProvider: React.FC<PlantProviderProps> = ({ children }) => {
    const [plants, setPlants] = useState<Plant[]>([])

    const addPlant = (newPlant: Plant) => {
        setPlants((prevPlants) => [...prevPlants, newPlant])
    }

    const updatePlant = (updatedPlant: Plant) => {
        setPlants((prevPlants) =>
            prevPlants.map((plant) =>
                plant.id === updatedPlant.id ? { ...plant, ...updatedPlant } : plant
            )
        );
    };

    const removePlant = (plantId: number) => {
        setPlants((prevPlants) => prevPlants.filter((plant) => plant.id !== plantId));
    };


    return (
        <PlantContext.Provider value={{ plants, addPlant, updatePlant, removePlant }}>
            {children}
        </PlantContext.Provider>
    )
}

// Custom Hook for safer useContext
export const usePlantContext = (): PlantContextType => {
    const context = useContext(PlantContext)
    if (!context) {
        throw new Error("usePlantContext must be used within a PlantProvider")
    }
    return context
}