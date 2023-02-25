import fs from 'node:fs'
import path from 'node:path'

// these two paths may vary depending on where you place this script, and your project structure including where typedoc generates its output files.
const typedocOutPath = await import('../typedoc.json', {
  assert: { type: 'json' },
}).then((module) => module.default.out)

async function* walk(dir) {
  for await (const d of await fs.promises.opendir(dir)) {
    const entry = path.join(dir, d.name)
    if (d.isDirectory()) yield* walk(entry)
    else if (d.isFile()) yield entry
  }
}

for await (let filepath of walk(typedocOutPath)) {
  let file = fs.readFileSync(filepath, 'utf-8')

  // add all the words we need to replace here for invalid jsx errors
  const words = ['internal']
  for (const word of words) {
    file = file.replace(new RegExp(`<${word}>`, 'gi'), word)
  }

  // Converts ugly names to clean names for example discordeno_types.ActionRow becomes ActionRow
  const cleanForms = [{ ugly: 'discordeno_types.' }, { ugly: "discordeno_utils."}]

  for (const form of cleanForms) {
      // Clean the file of the ugly forms
      file = file.replace(new RegExp(form.ugly, 'gi'), form.clean || '')
      const lastIndex = filepath.lastIndexOf("/")
      // Clean the file name of the ugly forms
      filepath = filepath.replace(new RegExp(form.ugly, 'gi'), form.clean || '')
  }

  fs.writeFileSync(filepath, file, function (err, result) {
    if (err) throw err
  })
}
