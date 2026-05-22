module github.com/iscreamarts/deploy-management-poc/apps/be

go 1.26.2

require github.com/iscreamarts/deploy-management-poc/packages/db v0.0.0

replace github.com/iscreamarts/deploy-management-poc/packages/db => ../../packages/db
