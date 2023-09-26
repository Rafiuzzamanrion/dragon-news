import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import {Button, Container} from 'react-bootstrap';
import Marquee from "react-fast-marquee";







const Header = () => {
  
    return (
        <Container className='mt-4'>
        <div className="text-center">
        <img src={logo} alt="" />
         <p className='text-secondary'><small>Journalism Without Fear or Favor</small></p>
         <p>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
        <div className='d-flex bg-secondary-subtle py-2 rounded'>
        <Button variant="danger">Latest News</Button>
    <Marquee className='text-danger  fs-3 text' speed={70}>
    1,000 pairs of autographed Size 22 Reeboks were made available thanks to a partnership between Shaquille O’Neal and Steiner Sports. Shaquille O’Neal is a larger-than-life character in every way. We’re talking about a superstar who earned as many self-styled nicknames as he did awards, a man who made his NBA debut by traveling from coast to coast like a speeding freight train. Naturally, O’Neal was also physically larger than most people due to his 7ft height and 300-pound weight. His absurd size 22 shoes could serve as an oversized phone for Allen Iverson. .@SHAQ‘s signature is going global. The 4x @NBA champ is bringing his SHAQ shoes to South Africa — priced between R799 & R999 ($52 – $65 USD) for children and adults. Shaq says the current line is aimed at “everyday consumers.” pic.twitter.com/MWEHdVZOX0 — Boardroom (@boardroom) January 16, 2022 O’Neal is a well-known figure outside of basketball, where he found tremendous success. The former NBA player is now much more than that because he is well-known all over the country. Shaq gained a lot of admirers by choosing to work with Wall-Mart to launch an affordable footwear line. This helped in solidifying his legacy beyond his playing career. Budget-friendly children’s shoes from O’Neal and the supermarket chain have been well received. Also, read – Anthony Davis and Patrick Beverley – A combination that will potentially make the Los Angeles Lakers a top-ranking defensive side again Shaquille O’Neal agreed to release a thousand autographed size-22 Shaq Attaq shoes for a premium! Shaq was the latest to cash in on the growing wave of collectors, as sports memorabilia for the biggest basketball stars of the 1990s continues to rise in demand. O’Neal has collaborated with Steiner Sports to release 1,000 unique pairs of his first-ever Reebok signature shoe. The Shaq Attaq; each shoe has a unique signature, numbered 32 or 34, with various call-outs to the Diesel’s career
    </Marquee>
        </div>
       
        </Container>
    );
};

export default Header;