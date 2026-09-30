(function() {
    const nodes = document.querySelectorAll('.relation__node');
    if (nodes.length === 0) return;

    nodes.forEach((node, index) => {
        node.addEventListener('mouseenter', () => {
            // Activa señal luminosa en los nodos adyacentes
            if (nodes[index - 1]) nodes[index - 1].classList.add('node-connected');
            if (nodes[index + 1]) nodes[index + 1].classList.add('node-connected');
        });

        node.addEventListener('mouseleave', () => {
            nodes.forEach(n => n.classList.remove('node-connected'));
        });
    });
})();