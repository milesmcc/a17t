module.exports = c => {
    let classes = {};
    for (let tone of c.tones) {
        let toneClass = `t-${tone}`;
        classes[toneClass] = {
            backgroundColor: c.colorMappings[tone].normal.fill,
            color: c.colorMappings[tone].normal.content,
        };
        for (let priority of c.priorities) {
            classes[toneClass][`&:p-${priority}`] = {
                backgroundColor: c.colorMappings[tone][priority].fill,
                color: c.colorMappings[tone][priority].content,
            }
        }
    }
    return classes;
};
