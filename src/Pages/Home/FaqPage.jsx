import React from 'react';

const FaqPage = () => {
    return (
        <div className='lg:max-w-6xl mx-auto my-32'>

            <h1 className='lg:text-4xl text-xl p-1 text-center font-bold my-10'>FREQUENTLY ASKED QUESTIONS</h1>
            <div className="join join-vertical w-full">
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" checked="checked" /> 
    <div className="collapse-title text-xl font-medium">
    What types of electronics brands does ElectroSphere offer?
    </div>
    <div className="collapse-content"> 
      <p>ElectroSphere offers a diverse range of electronics from top brands like Apple, Samsung, Sony, and more. We curate the latest smartphones, tablets, laptops, smartwatches, and accessories, ensuring you have access to cutting-edge technology.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    How can I contact customer support if I have an issue with my purchase?
    </div>
    <div className="collapse-content"> 
      <p>If you have any questions or concerns about your purchase, our customer support team is here to help. You can reach us via email at support@electrosphere.com or through our Contact Us page. Our knowledgeable representatives are ready to assist you.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    Do you provide product reviews and recommendations?
    </div>
    <div className="collapse-content"> 
      <p>Yes, we do! Our website features in-depth product reviews, comparisons, and buying guides to help you make informed decisions. We're committed to helping you choose the right electronics that suit your needs and preferences.</p>
    </div>
  </div>

  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    What is the warranty policy for products purchased on ElectroSphere?
    </div>
    <div className="collapse-content"> 
      <p>We stand behind the quality of the products we sell. Most items come with a standard manufacturer's warranty. For specific warranty details, please refer to the product description or reach out to our customer support team.</p>
    </div>
  </div>
</div>
        </div>
    );
};

export default FaqPage;