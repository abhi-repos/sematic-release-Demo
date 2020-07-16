module.exports = {
    debug: true,
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