import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import SwitchReact from 'react-switch';
import { HiMoon, HiOutlineSun } from 'react-icons/hi';

export default function Switch() {
    const { theme, setTheme } = useTheme();
    const [isActiveThemeDark, setIsActiveThemeDark] = useState(false);
    const [themeLocalStorage, setThemeLocalStorage] = useState('');

    useEffect(() => {
        if (typeof window !== undefined)
            setThemeLocalStorage(localStorage.getItem('light'));
    }, [theme]);

    function changeTheme() {
        if (isActiveThemeDark) {
            localStorage.setItem('light', 'light');
            setTheme('light');
            setIsActiveThemeDark(false);
        } else {
            localStorage.setItem('light', 'dark');
            setTheme('dark');
            setIsActiveThemeDark(true);
        }
    }

    return (
        <SwitchReact
            checkedIcon={<HiOutlineSun size={15} color="#fff" />}
            uncheckedIcon={<HiMoon size={15} color="#fff" />}
            onChange={changeTheme}
            checked={themeLocalStorage === 'dark' ? true : false}
            height={18}
            width={40}
            handleDiameter={28}
            offColor="#666666"
            onColor="#4953b8"
        />
    );
}
