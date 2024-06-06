function singleCard({ logo, company, postedAt, location, website, requirements, position, description, contract, content, items, id, logoBackground, role }) {
    const advertisment = createNode(
        {
            id,
            tag: 'div',
            classList: ['advertisment'],
        },
        document.querySelector('body')
    );
    createNode(
        {
            tag: 'img',
            src: logo,
            classList: ['logos'],
            backgroundColor: logoBackground,
        },
        advertisment
    );
    const firstPart = createNode(
        {
            tag: 'div',
            classList: ['first']
        },
        advertisment
    );

    createNode(
        {
            tag: 'h3',
            textContent: company,
            classList: ['h3']
        },
        firstPart
    );
    createNode(
        {
            tag: 'p',
            textContent: website,
            classList: ['website']
        },
        firstPart
    );
    createNode(
        {
            tag: 'button',
            classList: ['company'],
            textContent: 'Company Site'
        },
        advertisment
    );

    const contentsss = createNode(
        {
            tag: 'div',
            classList: ['content'],
        },
        document.querySelector('body')
    );
    const firstPosition = createNode(
        {
            tag: 'div',
            classList: ['firstPosition']
        },
        contentsss
    )
    const contentData = createNode(
        {
            tag: 'div',
            classList: ['contentData'],
        }, firstPosition
    );
    const time = createNode(
        {
            tag: 'div',
            classList: ['time']
        },
        contentData
    );
    createNode(
        {
            tag: 'p',
            textContent: postedAt,
        },
        time
    );
    createNode(
        {
            tag: 'p',
            textContent: contract,
        },
        time
    );
    createNode(
        {
            tag: 'h5',
            textContent: position,
        },
        contentData
    );
    createNode(
        {
            tag: 'p',
            textContent: location,
            classList: ['location']
        },
        contentData
    );
    createNode(
        {
            tag: 'button',
            classList: ['contentbutton'],
            textContent: 'Apply Now'
        },
        firstPosition
    );
    createNode(
        {
            tag: 'p',
            textContent: description,
            classList: ['description']
        },
        contentsss
    );
    createNode(
        {
            tag: 'h3',
            textContent: 'Requirements',
        },
        contentsss
    );
    createNode(
        {
            tag: 'p',
            textContent: requirements.content,
            classList: ['contents']
        },
        contentsss
    );

    const ul = createNode({ tag: 'ul' }, contentsss)

    requirements.items.forEach(item => {
        createNode({ tag: 'li', textContent: item }, ul)
    });

    createNode(
        {
            tag: 'h3',
            textContent: 'What Will You Do',
            classList: ['title']
        },
        contentsss
    );
    const ol = createNode({ tag: 'ol' }, contentsss)

    requirements.items.forEach(item => {
        createNode({ tag: 'li', textContent: item }, ol)
    });
    createNode(
        {
            tag: 'p',
            textContent: role.content,
            classList: ['role']
        },
        contentsss
    );
    const footer = createNode({
        tag: 'div',
        classList: ['footer']
    },
    );
    const footerPar = createNode({
        tag: 'div'
    },
        footer
    );
    createNode({
        tag: 'h4',
        textContent: 'Senior Software Engineer'
    },
        footerPar
    );
    createNode({
        tag: 'p',
        textContent: 'So Digital Inc',
    },
        footerPar
    );
    createNode({
        tag: 'button',
        textContent: 'Apply Now',
        classList: ['contentbutton']
    },
        footer
    );
}












