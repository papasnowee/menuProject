import { schema, normalize } from 'normalizr'

const vm = new schema.Entity('vms')

const env = new schema.Entity('envs', {
  vMachines: [vm],
})

const envNormalizer = envs => {
  const result = normalize(envs, {
    data: [env],
  })
  return result.entities.vms
}

export default envNormalizer
