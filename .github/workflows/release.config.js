module.exports = {
    debug: true,
    plugins: [
        // analyze commits with conventional-changelog
        ['@semantic-release/commit-analyzer'],
        // generate changelog content with conventional-changelog
        ['@semantic-release/release-notes-generator'],
        // creating a new version commit
        '@semantic-release/github',
    ],
    branches: [
        "master",
        "next",
        {"name": "beta", "prerelease": true},
        {"name": "alpha", "prerelease": true},
        {"name": "hotfix", "prerelease": true},
        // {"name": "feature/*", "prerelease": true},
        // {"name": "hotfix/*", "prerelease": true},
        // {"name": "debug/*", "prerelease": true}
    ]
};