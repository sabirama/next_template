import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";
import { compareHash, hashString } from "../src/middleware/encryption";

export default function () {
    const [count, setCount] = useState(0)
    const [hash, setHash] = useState('')
    const [hashRes, setHashres] = useState('')

    const [chash, setcHash] = useState('')
    const [chashRes, setcHashres] = useState('')
    const [cBool, setcBool] = useState(null)

    const router = useRouter();
    const { quote } = router.query

    const qoutes = [
        'HELLO WORLD',
        'KEEP CODING'
    ]

    function hasher(toHash: string) {
        hashString(toHash).then(data => {
            setHashres(data)
        })
    }

    function compHasher(toCompare: string, stored: string) {
        compareHash(toCompare, stored).then(data => {
            if (data) {
                setcBool(true)
            } else {
                setcBool(false)
            }
        })
    }

    return (
        <>
            <h1 className="text-center text-9xl text-emerald-300">NEXT APP</h1>
            <div className="flex flex-wrap">
                <Link href="/" className="p-4">Clear Quote</Link>
                {
                    qoutes.map((quote, i) => (
                        <Link href={`/?quote=${quote}`} key={i} className="p-4">Quote {i + 1}</Link>
                    ))
                }

                <h1 className="text-emerald-500 text-7xl text-center">{` ${quote ? quote : ""}`}</h1>
            </div>


            <div>
                <span className="p-4">COUNT :</span>
                <button onClick={() => { setCount(count + 1) }} className="bg-zinc-500 px-2 rounded-sm border-l-8 border-r-8">{count}</button>
            </div>

            <div className="mt-4 px-4">
                <h3 className="py-2">HASHING</h3>

                <input type="text" placeholder="string to hash" value={hash} onChange={(e) => { setHash(e.target.value) }} className="input text-black px-4" />
                <button onClick={() => { hasher(hash) }} className="px-4 bg-cyan-800 mx-2 hover:bg-slate-500">HASH</button>
                <p>hash: {hashRes}</p>
            </div>

            <div className="mt-4 px-4">
                <h3 className="py-2">COMPARE HASH</h3>
                <input type="text" placeholder="string" value={chash} onChange={(e) => { setcHash(e.target.value) }} className="input text-black px-4" />
                <input type="text" placeholder="hashed" value={chashRes} onChange={(e) => { setcHashres(e.target.value) }} className="mx-2 input text-black px-4" />
                <button onClick={() => { compHasher(chash, chashRes) }} className="px-4 bg-cyan-800 hover:bg-slate-500">COMPARE</button>
                <p>result: {cBool === null ? "" : String(cBool)}</p>
            </div>
        </>
    )
}