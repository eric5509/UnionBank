import { navHeight } from '@/app/(root)/layout'
import React from 'react'

export default function Loader() {
    return (
        <div style={{ height: `calc(100vh - ${navHeight})` }} className="activeBg backdrop-blur-lg h-full grid relative place-content-center">
            <div className="spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>)
}
