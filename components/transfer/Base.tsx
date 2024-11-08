'use client'
import Button from "@/components/shared/Button";
import Input from "@/components/shared/Input";
import Title from "@/components/shared/Title";
import { useEffect, useState } from "react";
import { error, status, value } from "./data";
import { getFormattedDate } from "@/lib/helper";
import Select from "../shared/Select";
import { navHeight } from "@/app/(root)/layout";

export default function Base() {
    const [loading, setLoading] = useState(false)
    const date = getFormattedDate()
    const [values, setValues] = useState({
        senderAccountName: "",
        senderAccountNumber: "",
        senderBankName: "",
        recipientAccountName: "",
        recipientAccountNumber: "",
        recipientBankName: "",
        amount: "",
        status: "",
        description: "",
        date: `${date}`
    })
    const [errors, setErrors] = useState(
        {
            senderAccountName: "",
            senderAccountNumber: "",
            senderBankName: "",
            recipientAccountName: "",
            recipientAccountNumber: "",
            recipientBankName: "",
            amount: "",
            status: "",
            description: "",
            date: ''
        }
    )
    const onChange = (e: any) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
        setErrors({ ...errors, [name]: "" })
    }

    const submit = async () => {
        if (values.senderAccountName.trim() && values.senderAccountNumber.trim() && values.senderBankName.trim() && values.recipientAccountName.trim() && values.recipientAccountNumber.trim() && values.recipientBankName.trim() && values.amount.trim() && values.description.trim() && values.date.trim() && values.status.trim()) {

            const url = `http://localhost:5000/transfer`;

            try {
                setLoading(true);
                const response = await fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        ...values,
                    }),
                });
                const result = await response.json();
                console.log(result)
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }

        }
        return setErrors({
            ...errors,
            senderAccountName: values.senderAccountName.trim() ? "" : "Please input Sender Account Name",
            senderAccountNumber: values.senderAccountNumber.trim() ? "" : "Please input Sender Account Number",
            senderBankName: values.senderBankName.trim() ? "" : "Please input Sender Bank Name",
            recipientAccountName: values.senderAccountName.trim() ? "" : "Please input Recipient Account Name",
            recipientAccountNumber: values.recipientAccountNumber.trim() ? "" : "Please input Recipient Account Number",
            recipientBankName: values.recipientBankName.trim() ? "" : "Please input Recipient Bank Name",
            amount: values.amount.trim() ? "" : "Please enter the Amount",
            description: values.description.trim() ? "" : "Please enter a Description ",
            status: values.status.trim() ? "" : "Please select a Status",
            date: values.date.trim() ? "" : "Please input a Date",
        })
    }


    return (
        <div style={{height: `calc(100vh - ${navHeight})`}} className="h-full flex flex-col">
            <div className="px-3">
                <Title title="Transfer Funds" />
            </div>
            <div className="flex flex-1 flex-col h-full justify-between">
                <div className="grid grid-cols-2 p-4 pt-0 gap-4">
                    <Input onChange={onChange} value={values.recipientAccountName} error={errors.recipientAccountName} name="recipientAccountName" label=" Recipient Account Name" style="rounded-lg" />
                    <Input onChange={onChange} value={values.recipientAccountNumber} error={errors.recipientAccountNumber} name="recipientAccountNumber" label="Recipient Account Number " style="rounded-lg" />
                    <Input onChange={onChange} value={values.recipientBankName} error={errors.recipientBankName} name="recipientBankName" label="Recipient Bank Name" style="rounded-lg" />
                    <Input onChange={onChange} value={values.amount} error={errors.amount} name="amount" label="Amount" style="rounded-lg" />
                    <Input onChange={onChange} value={values.description} error={errors.description} name="description" label="Description" style="rounded-lg" />
                </div>
                <div className="p-5 flex justify-end">
                    <div onClick={submit} className="">
                        <Button title="Submit" style="text-white w-fit bg-emerald-500" />
                    </div>
                </div>
            </div>
        </div>
    )
}
