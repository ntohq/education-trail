```mermaid
gitGraph
    commit id: "start of production"
    branch dev
    commit id: "copy of main"
    branch AddFeature
    commit id: "Added Functions"
    commit id: "Testing"
    commit id: "Minoe Bug Fixes"
    checkout dev
    merge AddFeature tag: "Pull branch into development for further testing"
    commit id: "Bug Fix"
    commit id: "Scaling Fixed"
    checkout main
    merge dev tag: "Beta V1.00"
    checkout dev
    branch newIssue
    commit id: "copy of dev"
    commit
    checkout dev
    merge newIssue tag: "Issue Fixed"
    checkout main
    merge dev tag: "Beta V1.01"
 ```
