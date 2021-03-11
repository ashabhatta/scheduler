import Airtable from 'airtable';

// api keys are confidential
const base = new Airtable({ apiKey: 'keyQAqtrW4k6FfA9J' }).base(
  'appQ2FGYUVQ4YJCru'
);

export default base;
