import { useEffect, useState } from "react";

export default function Home() {
    const userName = sessionStorage.getItem('User')

    return (
        <h1 className="px-130 py-50 font-bold
        ">Welcome, {userName}</h1>
    );
}