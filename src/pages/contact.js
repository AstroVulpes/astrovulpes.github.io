import React from "react";
import Sidebar from "../components/Sidebar";

const Contact = () => {
    return (
        <div>
            <section>
                <Sidebar />

                <article style={{ float: 'left', width: 'calc(90vw - 200px)', padding: '0px' }}>
                    <h2>
                        Contact
                    </h2>
                    <hr />
                    <p>
                        If you want to reach me, you can contact me at <a href="mailto:astro.vulpes.official@gmail.com?subject=Mail%20from%20Contact%3A&body=" target="_blank" rel="noopener noreferrer" style={{ fontSize:"10pt" }}>astro.vulpes.official@gmail.com</a> for any business inquiries or other questions.
                    </p>
                </article>
            </section>
        </div>
    );
};

export default Contact;