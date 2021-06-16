import React, {useEffect, useState} from 'react'
import { Snackbar, Button } from '@material-ui/core';
import * as serviceWorkerRegistration from '../serviceWorkerRegistration';

export default function PwaUpdater(){
    const [showReload, setShowReload] = useState(false)
    //const [waitingWorker, setWaitingWorker] = useState<ServiceWorker | null>(null)

    const onSWUpdate = () => {
        serviceWorkerRegistration.register({
            onUpdate: registration =>{
                window.alert('發現新版本！！！ 點此立即更新')
                if(registration && registration.waiting){
                    registration.waiting.postMessage({type: 'SKIP_WAITING'})
                }
                window.location.reload()
            }
        });
    }
    async function reloadPage (){
        await serviceWorkerRegistration.register({})
        setShowReload(false)
        window.location.reload(true)
    }

    useEffect(()=>{
        onSWUpdate()
    },[])

    return(
        <Snackbar
            open={showReload}
            message="A new version is available!"
            onClick={reloadPage}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            action={
                <Button
                    color="inherit"
                    size="small"
                    onClick={reloadPage}
                >
                    Reload
                </Button>
            }
        />
    )
}