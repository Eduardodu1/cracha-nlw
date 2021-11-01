const linksSocialMedia = {
  github: 'eduardodu1',
  youtbe: 'wVew3IcN6uxjcXtVVM2sng',
  facebook: 'carloseduardo',
  instagram: 'duuh.ed',
  twitter: 'eduardo_dull'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = 'https://api.github.com/users/${linksSocialMedia.github}'

  fetch(url)
    .then(response => response.json())
    .then(data => alert(data.bio))
  userName.textContent = data.name
  userBio.textContent = data.bio
}

getGitHubProfileInfos()
