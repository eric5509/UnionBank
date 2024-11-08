import TransferTable from '@/components/transfer/TransfersTable'
import Title from '@/components/shared/Title'
import Framer from '@/lib/Framer'
import React from 'react'
import Button from '@/components/shared/Button'
import { Plus } from 'lucide-react'
import Link from 'next/link'

export default function page() {
    return (
        <Framer>
            <div className="px-3 flex items-center justify-between">
                <Title title='Transfers' />
                <Link href={'/transfers/create'}>
                    <Button title="Add Transfer" style='bg-emerald-500 text-white' icon={<Plus />} />
                </Link>
            </div>
            <TransferTable />
        </Framer>

    )
}
