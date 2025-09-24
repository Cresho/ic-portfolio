import './index.scss';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import apiKey from './emailkey';
import emailjs from '@emailjs/browser';



const Contact = () => {
    const form = useRef();
    const { register, handleSubmit } = useForm();

    const onSubmit = () => {

        emailjs.sendForm(
            apiKey.SERVICE_ID,
            apiKey.TEMPLATE_ID,
            form.current,
            apiKey.USER_ID
        )
        .then((result) => {
                alert("Message Sent", result.text);
            },
        (error) => {
            alert("An error occurred, Please try again", error.text);
        });
    };

    return (
        <div className="container contact">
            <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                <h1>Contact Me</h1>
                <input type="text" {...register("name")} placeholder="Your Name" required />
                <input type="email" {...register("email")} placeholder="Your Email" required />
                <textarea {...register("message")} placeholder="Your Message" required />
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;