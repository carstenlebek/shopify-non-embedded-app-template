import {useState} from "react";
import styles from 'src/styles/Login.module.css'

export default function Login() {
    const [shop, setShop] = useState("")
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Login with your store url</h1>
            <div className={styles.card}>
                <div className={styles.inputContainer}>
                    <input className={styles.input} value={shop} onChange={e => setShop(e.target.value)}/>
                    <div className={styles.myShopify}>.myshopify.com</div>
                </div>
                <a href={`/api/auth/offline?shop=${shop}.myshopify.com`}>
                    <button disabled={shop === ""} className={styles.button}>Login</button>
                </a>
            </div>
        </div>
    )
}