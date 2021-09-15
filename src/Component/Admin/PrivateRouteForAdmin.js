import React from 'react';
import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateRouteForAdmin = ({children, ...rest}) => {
    const [isAdmin, setIsAdmin] = useContext(UserContext);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                isAdmin ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/adminCheck",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
};

export default PrivateRouteForAdmin;