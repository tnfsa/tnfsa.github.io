import {Fragment, useState} from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";
import * as FingerprintJS from "@fingerprintjs/fingerprintjs";
import Cookies from "universal-cookie/es6";
import {API} from "../../../helpers/API";

export function AskGEO(props) {
    const [close, setClose] = useState(true);
    const cookies = new Cookies()
    const api = new API()

    function handleClose() {
        setClose(false);
        navigator.geolocation.getCurrentPosition(geoSuccess, geoError, {
            enableHighAccuracy: true
        });
    }

    function geoSuccess(pos) {
        if (typeof cookies.get('fingerprint') === 'undefined') {
            const fpPromise = FingerprintJS.load()
            ;(async () => {
                // Get the visitor identifier when you need it.
                const fp = await fpPromise
                const result = await fp.get()

                // This is the visitor identifier:
                const fingerprint = result.visitorId
                cookies.set('fingerprint', fingerprint)
                api.call('/log/geo', {
                    method: "POST",
                    body: {
                        lat: pos.coords.latitude,
                        lng: pos.coords.longitude,
                        fingerprint: fingerprint
                    }
                })
            })()
        } else {
            api.call('/log/geo', {
                method: "POST",
                body: {
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude,
                    fingerprint: cookies.get('fingerprint')
                }
            })
        }
    }

    function geoError(err) {
        alert('位置錯誤')
    }

    return (
        <Fragment>
            <Dialog open={props.open && close} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">位置</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        請開啟位置權限讓搜尋結果更精準
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        好
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    )
}