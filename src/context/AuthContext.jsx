import { createContext, useState, useContext, useCallback, useMemo } from "react";
import PropTypes from 'prop-types'

export const AuthContext = createContext();

export function AuthContextProvider({children}){
    const [isAuthenticated, setIsAuthenticated] = useState(window.localStorage.getItem('authorization'))

    const login = useCallback(() => {
        window.localStorage.setItem('authorization', true)
        setIsAuthenticated(true)
      }, []
    )

    const logout = useCallback(() => {
        window.localStorage.removeItem('authorization')
        setIsAuthenticated(false)
      }, []
    )

    const value = useMemo(()=>({
        login,
        logout,
        isAuthenticated
    }), [login, logout, isAuthenticated])
    
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

AuthContextProvider.propTypes = {
    children: PropTypes.object
};

export function useAuthContext(){
    return useContext(AuthContext);
}