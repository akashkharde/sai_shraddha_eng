import { FormProvider, useForm } from "react-hook-form"
import { Input } from "../Common/ContactInput"
import { BsFillCheckSquareFill } from "react-icons/bs";
import { useRef, useState } from "react";
import Button from "../Ui/Button";

export default function HomeContact() {
    const methods = useForm();
    const form = useRef();

    const onSubmit = (data) => {
        console.log('Submitted data:', data);
    };
    const name_validation = {
        name: 'name',
        label: 'name',
        type: 'text',
        id: 'name',
        placeholder: 'write your name ...',
        validation: {
            required: {
                value: true,
                message: 'required',
            },
            maxLength: {
                value: 30,
                message: '30 characters max',
            },
        },
    }


    const email_validation = {
        name: 'email',
        label: 'email',
        type: 'email',
        id: 'email',
        placeholder: 'type email ...',
        validation: {
            required: {
                value: true,
                message: 'Email is required',
            },
            pattern: {
                // Basic email pattern, you can use a more complex one for your needs
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/,
                message: 'Invalid email address',
            },
        },
    };

    const phone_validation = {
        name: 'phone',
        label: 'phone',
        type: 'tel',
        id: 'phone',
        placeholder: 'type phone number ...',
        validation: {
            required: {
                value: true,
                message: 'Phone number is required',
            },
            minLength: {
                value: 10,
                message: 'Phone number should be at least 10 digits',
            },
            pattern: {
                value: /^[0-9]*$/, // Only allow numeric characters
                message: 'Invalid phone number',
            },
        },
    };


    const desc_validation = {
        name: 'desc',
        label: 'desc',
        type: 'text',
        id: 'desc',
        placeholder: 'type description ...',
        validation: {
            required: {
                value: false,
                message: 'Description is required',
            },
            minWordCount: {
                value: 3,
                message: 'Description should contain at least 3 words',
            },
        },
    };

    const websiteUrlValidation = {
        name: 'websiteUrl',
        label: 'Website URL',
        type: 'url',
        id: 'websiteUrl',
        placeholder: 'Enter website URL ...',
        validation: {
            required: {
                value: false,
                message: 'Website URL is required',
            },
            pattern: {
                value: /^(https?:\/\/)?([a-zA-Z0-9-]+\.){1,}[a-zA-Z]{2,}([\/\w-]*)*$/,
                message: 'Enter a valid website URL',
            },
        },
    };
    return (

        <div className="pb-10">
            <FormProvider {...methods}>
                <form
                    onSubmit={methods.handleSubmit(onSubmit)}
                    noValidate
                    autoComplete="off"
                    className="container"
                    ref={form}
                >
                    <div className="mx-4">
                        <Input {...name_validation} name='name' />
                        <Input {...email_validation} name='email' />
                        <Input {...websiteUrlValidation} name='website' />
                        <Input {...phone_validation} name='phone' />
                        <Input {...desc_validation} className="md:col-span-2" name='massage' />
                    </div>
                    <div className="mt-3 mx-4">
                        <Button size="large"  onClick={onSubmit}  >    Submit  </Button>
                    </div>
                </form>
            </FormProvider>
        </div>
    )
}