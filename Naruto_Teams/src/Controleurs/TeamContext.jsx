import { createContext, useContext, useState, useEffect } from "react";

const TeamContext = createContext();

export function TeamProvider ({children}) {
    const [team, setTeam] = useState([]);


    const ajouterTeam = ninja => {
        if (!team.find(n => n.id === ninja.id )){
            setTeam([...team,ninja]);
        }
    };

    return ( 
        <TeamContext.Provider value= {{team, ajouterTeam}}>
        {children}
        </TeamContext.Provider>
    );
}

export function useTeam(){
    return useContext(TeamContext);
}