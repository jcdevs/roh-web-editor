const loremIpsum = [
  'Praesent vulputate vehicula sodales.',
  'Donec imperdiet nisi sit amet convallis commodo.',
  'Suspendisse ultrices dolor ut magna bibendum, eu vulputate tortor luctus.',
  'Praesent consequat sapien vitae tortor finibus pellentesque.',
  'Nunc vehicula ligula et lectus malesuada varius.',
  'Maecenas lectus magna, ultricies in porta non, pretium vel eros.',
  'Aenean egestas tellus ut arcu vestibulum dignissim.',
  'Nam consectetur consectetur ligula at blandit.',
  'Suspendisse nec orci turpis.',
  'Curabitur a ex condimentum, consequat lectus at, malesuada elit.',
  'Curabitur tempus auctor magna, vitae fringilla sapien maximus in.',
  'Donec sollicitudin et magna placerat sollicitudin.',
  'Integer non ex non dui laoreet sollicitudin in eu lorem.',
  'Aliquam sed dui feugiat, efficitur felis eget, commodo quam.',
  'Integer commodo commodo nisi, id vulputate lectus rhoncus et.',
  'Suspendisse potenti.',
  'Proin et ultrices erat.',
  'Morbi et lobortis urna.',
  'Donec faucibus, lorem et laoreet ultrices, risus tortor commodo lorem, sed porttitor nisl libero a ante.',
  'Suspendisse placerat leo et ex luctus varius.',
  'Praesent quis felis in ipsum elementum efficitur efficitur in nunc.',
  'Duis rhoncus eros est.',
  'Sed ultrices blandit massa, a malesuada leo pharetra eu.',
  'Nulla id lacus metus.',
  'Nunc auctor, ligula sed varius congue, lectus est suscipit metus, sit amet tempus tortor mi nec ante.',
  'Sed ultrices, nunc eget hendrerit bibendum, lacus sapien facilisis dolor, semper placerat nisl metus vel urna.',
  'Nullam posuere, nisl vel dignissim condimentum, ipsum metus convallis ante, quis aliquam turpis nisl non est.',
  'Donec a erat eros.',
];

export const getIpsum = (sentenceCount: number) => {
  const selected = [];
  for (let i = sentenceCount; i > 0; i--) {
    const idx = Math.floor(Math.random() * loremIpsum.length);
    selected.push(loremIpsum[idx]);
  }
  return selected.join(' ');
}