import React from 'react';
import './styles/ScreenplayStyles.css'; 

const screenplayData = `
<screenplay>
  <fadein>FADE IN:</fadein>

  <scene>
    <scene-heading>EXT. SUBURBAN HOME - NIGHT</scene-heading>
    <action>
      We open on a modern suburban home. The front window illuminated by the lights inside. We see the silhouette of a small human figure as it runs back and forth. We push in closer as we slowly see a <character>BOY</character> running around the house.
    </action>
  </scene>

  <scene>
    <scene-heading>INT. SUBURBAN HOME - KITCHEN - NIGHT</scene-heading>
    <action>
      A green ball sits on a countertop. A young hand snatches it. It belongs to <character>FILBERT</character> (9), wiry, lost in his own imaginary world. Dressed as a Knight. A toy sword in his other hand.
    </action>
    <dialogue>
      <character>FILBERT (V.O.)</character>
      <quote>This is my castle. I am sworn to protect it. Anyone that stands in my way shall bear the wrath of the almighty—</quote>
    </dialogue>
    <action>
      Just then, the babysitter walks by. <character>BECKY</character> (23), trendy, distracted. She is mid-phone call with Filbert's mom, <character>TRACY</character>.
    </action>
    <dialogue>
      <character>BECKY (into phone)</character>
      <quote>Oh yeah, he's being good. He's just fighting orcs or trolls.</quote>
    </dialogue>
  </scene>

  <scene>
    <intercut-heading>INTERCUT PHONE CONVERSATION</intercut-heading>
    <dialogue>
      <character>TRACY</character>
      <quote>Oh, that's perfectly normal.</quote>
    </dialogue>
    <action>
      Filbert lifts his sword into the air, lets out a big battle cry, and sprints from the kitchen to—
    </action>
  </scene>

  <scene>
    <scene-heading>HALLWAY</scene-heading>
    <action>
      Filbert comes around the corner, distracted by his fantasy, bumps into the wall. His favorite ball slips from his hand. Everything slows down for Filbert.
    </action>
    <shot>
      <character>FILBERT'S POV</character>
      <action>In slow motion, the ball tumbles down the stairs. We hear each bounce echo as the ball travels down the steps.</action>
    </shot>
  </scene>
</screenplay>
`;

const Screenplay = () => {
  const handleDownloadPDF = () => {
    
  };

  return (
    <div className="screenplay-page">
      <div id="screenplay-content" className="screenplay-container" dangerouslySetInnerHTML={{ __html: screenplayData }} />
      <button className="download-button" onClick={handleDownloadPDF}>Download PDF</button>
    </div>
  );
};


export default Screenplay;
