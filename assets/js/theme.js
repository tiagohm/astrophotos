const tagFilter = []

function toggleByTag(button, name) {
  const idx = tagFilter.indexOf(name)

  if (idx >= 0) tagFilter.splice(idx, 1)
  else tagFilter.push(name)

  if (tagFilter.includes(name)) {
    $(`.btn[tag='${name}']`).removeClass("btn-danger")
    $(`.btn[tag='${name}']`).addClass("btn-success")
  } else {
    $(`.btn[tag='${name}']`).removeClass("btn-success")
    $(`.btn[tag='${name}']`).addClass("btn-danger")
  }

  $(".card[tags]").each((i, e) => {
    const tags = $(e).attr("tags").split(",")
    let found = tagFilter.length === 0

    if (!found) {
      for (const tag of tags) {
        if (tagFilter.includes(tag)) {
          found = true
          break
        }
      }
    }

    if (found) $(e).show()
    else $(e).hide()
  })
}
