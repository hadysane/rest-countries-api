import {useEffect} from 'react'
import { BsMoon, BsMoonFill } from 'react-icons/bs';
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
            <div onClick={handleChange} className='btn d-flex align-item-center gap-8'> {isDarkTheme ?  <BsMoonFill/>   : <BsMoon /> }  Dark Mode</div>
        </>
       
  )
}

export default ThemeChanger