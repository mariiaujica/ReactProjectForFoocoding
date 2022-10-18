
function about(){
const inlineScript = document.createElement('script');
    inlineScript.innerHTML = "function transformScroll(event) \{ if (!event.deltaY) \{ return\; \} event.currentTarget.scrollLeft += event.deltaY + event.deltaX\; event.preventDefault()\; \} var element = document.scrollingElement || document.documentElement\; element.addEventListener('wheel', transformScroll);";
    document.body.append(inlineScript);
    
    return(
        <div className="horizontal-scroll">
            <img src="./images/ossian02.jpg" />
            <div className="textBox">
                <p className="aboutText">
                    CREATURE CREATURE is an artist duo consisting of Chanel Tang and Ambrose Rehorek based in Melbourne in Australia. They first met at university and ‘flirted through art’ until they formed an official union in 2011 under one name. Creature Creature was chosen from a quote in the 1960’s film A Bucket of Blood; “A Creature is a Creature…or it is an artist!” Since then, they have continued a collaborative art practice that spans across exhibiting art, murals, street art, design and illustration.
                    Their work represents duality and the sum of a whole, a message of togetherness, states of balance, yin and yang. Their partnership breaks the myth of the lone artist, as collaboration is an instinctive ritual for them in realms of art, love and life. Collaboration is about preserving diversity, creating something complex, layered and fluid. The beauty of coming together. 
                    Born in Adelaide, Ambrose has a Degree in Visual Arts from the University of South Australia.
                    Chanel was born in Wellington, New Zealand, moved to Australia in 1998 where she did her Degree in Fine Art at Monash University. They met doing a Graduate Diploma in Graphic Design at RMIT.
                    Some of our clients include: Adidas, AS Colour, Cotton On, The New Yorker, John Holland construction, Swinburne University, AUS Post, Ocellus studios, Melbourne Food and Wine festival, Single O coffee, MAVA Collective, Strawberry Fields music festival, City of Melbourne, Whitehorse City Council, City of Stonnington, City of Maribyrnong, City of Yarra, City of Hurstville, Wyndham City Council, City of Port Phillip, Yorke Peninsula Council, Melbourne Water, SA Water, Wagga City Council.
                    Photo by Shannyn Higgins
                </p>
            </div>
            <div className="textBox">
                <p className="aboutText">
                    ARTIST CV
                    Education
                    Ambrose Rehorek
                    2005-2008 Bachelor of Visual Arts, University of South Australia, Adelaide2010-2011 Graduate Diploma of Graphic Design, RMIT, Melbourne
                    Chanel Tang
                    2007-2009 Bachelor of Fine Art. Monash University Caulfield, Melbourne, Australia.
                    2010-2011 Graduate Diploma in Graphic Design. RMIT, Melbourne Australia
                    Solo Shows
                    2013 Red Leaves, Espionage Gallery, Adelaide CBD
                    2013 Bruiser, Chaotic gallery, Windsor, Melbourne (Artists Lane)
                    2015 Never Ending, No Vacancy gallery, Melbourne CBD.
                    2016 Daggers, Blender Studios, Melbourne CBD.
                    2017 Binary Star, Outre Gallery, Melbourne CBD.
                    2018 Chaos Born, Off the Kerb Gallery, Collingwood, Melbourne.
                    2019 Hold Hands, Outre Gallery, Fitzroy, Melbourne.
                </p>
            </div>
        </div>
        
    )
}
export default about;
   