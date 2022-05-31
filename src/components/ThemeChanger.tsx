import {useEffect} from 'react'
import { BiMoon } from 'react-icons/bi';
import { useLocalStorage } from 'usehooks-ts'

const ThemeChanger = () => {
    const [isDarkTheme, setDarkTheme] = useLocalStorage('darkTheme', false)
    
    const handleChange = () => {
        setDarkTheme(prevValue => !prevValue)
    }

    useEffect(() => {
        if (isDarkTheme === true) {
            document.body.classList.add('dark-mode')
        } else {
            document.body.classList.remove('dark-mode');
        }
    })

    return (
        <>
            <button onClick={handleChange} className='btn d-flex align-item-center gap-8'> <BiMoon />  Dark Mode</button>
        </>
       
  )
}

export default ThemeChanger