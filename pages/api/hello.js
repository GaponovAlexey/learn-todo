
export default function handler(req, res) {
  res.status(200).json({
    counries: [
      { id: 1, title: 'new zzzzzZeland', population: 500000 },
      { id: 2, title: 'new zzzzZeland', population: 400000 },
      { id: 3, title: 'new zzzZeland', population: 300000 },
      { id: 4, title: 'new zzZeland', population: 100000 },
      { id: 5, title: 'new zZeland', population: 50000 },
    ],
  })
}
