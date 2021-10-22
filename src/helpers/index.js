import { useEffect, useRef } from 'react';
import { users as usersData } from 'data/users';

export const mockAPI = (success) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve([...usersData]);
            } else {
                reject({ message: 'Error' });
            }
        }, 2000);
    });
};

// Custom hook, same as useEffect but without first render
export const useDidMountEffect = (func, deps) => {
    const didMount = useRef(false);

    useEffect(() => {
        if (didMount.current) func();
        else didMount.current = true;
    }, deps);
};
