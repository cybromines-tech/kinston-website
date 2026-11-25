import type { Product, SpecColumn } from './products';
import entries from './grade-80-catalogue.json';

export const grade80CatalogueProducts: Product[] = entries.map((entry) => {
  const imageBase = `/images/products/grade-80/${entry.slug}`;
  const specColumns: SpecColumn[] = entry.headers.map((label, index) => ({
    key: index === 0 ? 'code' : label === 'WLL tonnes' ? 'wll' : `column${index}`,
    label,
    kind: 'text',
  }));
  const specRows = entry.rows.map((row) => Object.fromEntries(
    specColumns.map(({ key }, index) => [key, key === 'wll' ? Number(row[index]) : row[index]]),
  ));
  const summary = `${entry.name} for Grade 80 rigging.`;

  return {
    slug: entry.slug,
    category: 'grade-80-rigging',
    group: `G80 ${entry.group}`,
    name: entry.name,
    code: entry.code,
    grade: 'Grade 80',
    art: 'sling-hook',
    image: `${imageBase}.webp`,
    drawing: `${imageBase}-drawing.webp`,
    imageCaption: 'Representative product render in RAL 2004 orange',
    summary,
    description: [summary],
    features: [`Manufacturer-listed standard: ${entry.standard}.`],
    material: 'Alloy steel',
    finish: '',
    standards: [entry.standard],
    designFactor: entry.designFactor,
    proofLoadTest: entry.proofLoadTest,
    tempRange: entry.tempRange,
    specColumns,
    specRows,
    downloads: [],
  };
});
