import React from 'react';
import profilePicture from "../../../static/assets/Images/bio/headshotcrop.jpg"

export default function() {
    return (
        <div className='content-page-wrapper'>
            <div className='left-column' style={{
                background: "url(" + profilePicture + ") no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
            />
            <div className='right-column'> 
                Hi, I'm Colton, a Full-Stack Engineer. My passion lies in UI/UX and creating something great that users get to experience. I thrive in fast-paced environments and love to tackle complex challenges with innovative solutions.

                Currently, I am a small Business Owner at Lost Ark, LLC. In this role, I am responsible for creating online marketing content and campaign material for my clients. Prior to this, I worked in sales, where I gained valuable experience in leadership, customer service, working with a team, communication and problem solving.

                Outside of work, I enjoy music and video games and spending time with my family and friends. I am also actively involved in photography and fitness. I am always looking for new opportunities to learn and grow, and I believe in the power of collaboration and teamwork.

                If you're interested in connecting or learning more about my experience, feel free to send me a message or connect with me on LinkedIn!            
             </div>
        </div>
    );
}