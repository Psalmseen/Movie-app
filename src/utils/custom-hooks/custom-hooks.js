import { useState, useEffect } from 'react'


export const useSingleAndDoubleClick  = (actionSingleClick, actionDoubleClick, delay = 250) => {
    const [click, setClick] = useState(0)
    
    useEffect(() => {
        const timer = setTimeout(() => {
            if (click === 1) actionSingleClick();
            setClick(0)
        }, delay)
        if (click === 2) actionDoubleClick()
        return () => clearTimeout(timer)
    }, [actionDoubleClick, actionSingleClick, click, delay])
    
    return () => setClick(prev => prev + 1)
}