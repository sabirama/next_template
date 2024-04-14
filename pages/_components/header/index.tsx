import Link from "next/link"
import pagelist from "../../../src/pagelist"

export default function () {
    return (
        <header className="flex justify-between px-4 py-2">
            <Link href="/">HOME</Link>
            <nav>
                <ul className="flex flex-row-reverse gap-4">
                    {pagelist.map((item, i) => (
                        <li key={i}><Link href={item.path}>{item.name}</Link></li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}
