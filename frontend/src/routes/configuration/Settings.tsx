// Dependencies
import { useState } from "react";
// Componentes
import LeftNavigationMenu from "../../components/LeftNavigationMenu";
import HeaderMenu from "../../components/HeaderMenu";
// Css
import "/src/static/css/configuration/Settings.css"
import { ChangePassword, DeleteAccount, changeNavigator } from "../../components/Settings";

export default function Settings(){
    const [open,setOpen] = useState<boolean>(false)
    const [password, setPassword] = useState<string>("")
    const [newPassword, setNewPassword] = useState<string>("")
    const [navigatorIndex, setNavigatorIndex] = useState<number>(0)
    return (
        <div className = "settings-objects">
            {LeftNavigationMenu(open, setOpen)}
            {HeaderMenu(open, setOpen)}
            <main>
                <div className="settings-div">
                    <div className ="settings-nav">
                        {changeNavigator({navigatorIndex: navigatorIndex, setNavigatorIndex: setNavigatorIndex})}
                    </div>
                    <div className="settings-elements">
                        {navigatorIndex === 0 ? 
                        (
                            <ChangePassword
                                password={password}
                                setPassword={setPassword}
                                newPassword={newPassword}
                                setNewPassword={setNewPassword}
                            />
                        ) 
                        : (
                            <DeleteAccount/>
                          )}
                    </div>
                </div>
            </main>
        </div>
    )
}