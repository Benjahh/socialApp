import { useState } from "react"
import {
    IconButton,
    Box,
    InputBase,
    Typography,
    Select,
    MenuItem,
    FormControl,
    useTheme,
    useMediaQuery
} from "@mui/material"
import {
    Search,
    Message,
    DarkMode,
    LightMOde,
    Notifications,
    Help,
    Menu,
    Close

} from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux"
import state, {setMode, setLogout} from "state"
import { useNavigate } from "react-router-dom"
import FlexBetween from "components/flexBetween"
const Navbar = () => {
    const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector((state)=> state.user )
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)")

    const theme = useTheme()
    const neutralLight = theme.palette.neutral.light
    const dark = theme.palette.neutral.dark

    return <div> Navbar </div>

    
}

export default Navbar