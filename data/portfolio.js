

export const data = [
    {
        id: 1,
        title: "Hang Tags",
        slug: 'hang-tags',
        category: ['Trims & Accessories'],
        src: '/img/esar/Hang Tags (1).jpg',
        des1: `Whether your preference leans towards FSC™-certified materials or non-wood alternatives, strings, seals or ribbons for your hangtags, we always have the right options to match your brand’s needs and sustainable direction for trims.
        
        `,
        des2: `Whether you prefer variable data as a Sticker or directly printed on your Hangtags, our team is equipped with the expertise and commitment needed to tailor the perfect solution for your brand. We understand the importance of individuality and precision in variable data, and our dedicated team ensures that every detail aligns seamlessly with your vision.`
        ,
        des3: `Post offset and digital print techniques, we offer superior quality of hot stamping, embossing, spot UV to allow brands to distinguish from an ordinary tag. Elevate your brand’s identity with our customizable solutions, where innovation meets your unique needs.
`,
        overlay: 4
    },


    {
        id: 2,
        title: "Heat Transfer Label",
        slug: 'heat-transfer-label',
        category: ['Trims & Accessories'],
        src: '/img/esar/Heat Transfer Label.png',
        des1: `Heat transfer labels, also known as tag-less labels, are a type of label applied to garments or fabrics using heat and pressure. These labels are often used in the fashion and apparel industry as a modern and comfortable alternative to traditional sewn-in labels.
        `,
        des2: `Our heat transfers offer outstanding text and picture consistency with bright colors and clearer, more natural transfers with sharper details. We provide both simple and high rise heat transfer labels passing all rigorous testing procedures. We offer a wide range of styles including stretchable, reflective, neon and more.
`,
        des3: `Our team is equipped with expertise in heat press applications, ensuring labels are securely bonded to garments. With our OEKO-TEX® certified materials, you can trust that your heat transfer labels not only meet but exceed the highest industry benchmarks for quality, safety, and eco-conscious practices.
`,
        overlay: 2
    },
    {
        id: 3,
        title: "Care Labels",
        slug: 'care-labels',
        category: ['Trims & Accessories'],
        src: '/img/esar/Care Labels.jpg',
        des1: `Heat transfer labels, also known as tag-less labels, are a type of label applied to garments or fabrics using heat and pressure. These labels are often used in the fashion and apparel industry as a modern and comfortable alternative to traditional sewn-in labels.
        `,
        des2: `        Our heat transfers offer outstanding text and picture consistency with bright colors and clearer, more natural transfers with sharper details. We provide both simple and high rise heat transfer labels passing all rigorous testing procedures. We offer a wide range of styles including stretchable, reflective, neon and more.
`,
        des3: `        Our team is equipped with expertise in heat press applications, ensuring labels are securely bonded to garments. With our OEKO-TEX® certified materials, you can trust that your heat transfer labels not only meet but exceed the highest industry benchmarks for quality, safety, and eco-conscious practices.
`,
        overlay: 2
    },
    {
        id: 4,
        title: "Woven and Printed Labels",
        slug: 'woven-and-printed-labels',

        src: '/img/esar/Woven and Printed Labels.jpg',
        category: ['Trims & Accessories'],
        des1: `Brand labels are essential components in the realm of garment branding, providing distinct ways to convey information, enhance aesthetics, and establish brand identity. While labels may seem like minor details among the various components of a garment or home textile product, their significance is paramount. Woven and printed labels are two popular types of labels used in the fashion, home textile, and even footwear industries.
`,
        des2: `        Woven labels are typically crafted from threads, allowing for intricate designs and fine details. They are woven using various techniques, creating a textured and durable label, while Printed labels involve applying ink or pigment onto a surface, creating a label with a smooth finish. Each type of label, be it woven or printed, brings its own set of advantages and disadvantages to the table. Making the right choice for your product is a decision that holds significant weight.
`,
        des3: `        Our meticulous approach extends to the careful selection and testing of materials to ensure the highest standards. Rest assured, our materials are OEKO-TEX® certified, guaranteeing not only exceptional quality but also adherence to rigorous environmental and safety standards.`,
        overlay: 6
    },
    {
        id: 5,
        title: "Self Adhesive Labels",
        slug: 'self-adhesive-labels',
        category: ['Self Adhesive Labels'],
        des1: `Elevate your brand connection with our durable and removable self-adhesive label. These labels go beyond mere identification; they enable businesses to forge a more personal connection with customers.
        `,
        des2: `        Our self-adhesive peel-off labels are designed to endure both high and cold temperatures, ensuring resilience in various applications. Whether your products face the heat of summer or the chill of winter, our labels remain steadfast, offering the best labeling solution for a range of scenarios.
`,
        src: '/img/esar/Self Adhesive Labels.jpg',
        overlay: 6
    },
    {
        id: 6,
        title: "Paper Based Packaging Box",
        slug: 'paper-based-packaging-box',
        category: ['Paper Based Packaging Box'],
        des1: `Backed by our business expertise and an extensive product range, our in-house team of skilled packaging designers takes pride in delivering comprehensive brand packaging in different design like Closed Box, Window Box, Rigid Box, PDQS, Mono Carton solutions across diverse market sectors.
        `,
        src: '/img/esar/box.avif',
        overlay: 6
    },

    {
        id: 7,
        title: "Belly Band & Photo Inlays",
        slug: 'belly-band-&-photo-inlays',
        src: '/img/esar/Belly Band & Photo Inlays.jpg',

        category: ['Belly Band & Photo Inlays'],
        des1: `Belly Bands and Photo Inlays stand as supplementary elements in packaging and branding, working collaboratively to elevate visual allure, furnish vital information, and craft a distinct and memorable presentation. These components serve as valuable tools for businesses seeking to not only capture attention but also convey brand messaging effectively.
        `,
        des2: `        We can use different print and finishing techniques to make products look their best in store. We offer the adhesive strip at the end of the bellyband, so that after wrapping, it might be locked using that glue portion. 
`,
        des3: `        With FSC™-certified materials option, we contribute to a more sustainable and environmentally conscious approach to packaging, aligning with our dedication to both quality and ethical practices.
`,
        overlay: 5
    }

]

export const getPortfolioData = () => data;

export const getPortfolioItem = (value, whereName = "slug") => {
    return data.find(item => item[whereName] === value);
};
export const getPortfolioLink = (item) => {
    if (item)
        return item.slug && `/products/${item?.slug}?id=${item?.id}`;

    return '';
};