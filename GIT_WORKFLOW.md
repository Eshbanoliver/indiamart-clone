# Git Workflow Configuration

## Branch Protection Rules

### Main Branch
- **Protected**: Yes
- **Require PR reviews**: Yes (2 reviewers)
- **Require status checks**: Yes
  - Build and Test
  - Lint Check
  - Type Check

### Develop Branch  
- **Protected**: Yes
- **Require PR reviews**: Yes (1 reviewer)
- **Require status checks**: Yes
  - Build and Test
  - Lint Check

## Required Status Checks

```yaml
# .github/workflows/ci.yml
name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main, develop ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run type check
        run: npm run type-check
      
      - name: Run linter
        run: npm run lint
      
      - name: Run tests
        run: npm run test
      
      - name: Build application
        run: npm run build
```

## Commit Message Convention

### Format
```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code formatting (no functional changes)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Build process or dependency changes
- `perf`: Performance improvements
- `ci`: CI/CD changes

### Examples
```
feat(auth): Add login with Google OAuth

fix(products): Resolve pagination bug on category pages

docs(api): Update authentication endpoints documentation

style(components): Format Button component with Prettier

refactor(services): Extract common API logic to base service

test(hooks): Add unit tests for useProducts hook

chore(deps): Update React Query to v5

perf(images): Optimize product gallery loading

ci(github): Add automated deployment to staging
```

## Branch Naming Convention

### Feature Branches
```
feature/user-authentication
feature/product-search
feature/supplier-dashboard
```

### Bugfix Branches
```
bugfix/login-redirect-issue
bugfix/cart-calculation-error
bugfix/mobile-navigation
```

### Hotfix Branches
```
hotfix/critical-security-patch
hotfix/payment-gateway-fix
hotfix/database-connection-issue
```

### Release Branches
```
release/v1.2.0
release/v2.0.0-beta
```

## Pull Request Template

```markdown
## Description
Brief description of changes and motivation.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Unit tests added/updated
- [ ] Integration tests added/updated
- [ ] Manual testing completed

## Screenshots (if applicable)
Add screenshots to visualize changes.

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] Environment variables documented (if applicable)
- [ ] Mock data updated (if applicable)

## Related Issues
Closes #123
Related to #456
```

## Release Process

### Versioning Strategy
- **Semantic Versioning**: `MAJOR.MINOR.PATCH`
- **Major**: Breaking changes
- **Minor**: New features (backward compatible)
- **Patch**: Bug fixes (backward compatible)

### Release Steps
1. **Prepare Release**
   ```bash
   git checkout develop
   git pull origin develop
   npm version patch  # or minor/major
   ```

2. **Create Release Branch**
   ```bash
   git checkout -b release/v1.2.0
   ```

3. **Finalize Release**
   ```bash
   # Update changelog
   # Run final tests
   # Build application
   ```

4. **Merge to Main**
   ```bash
   git checkout main
   git merge release/v1.2.0
   git tag v1.2.0
   git push origin main --tags
   ```

5. **Merge Back to Develop**
   ```bash
   git checkout develop
   git merge main
   git push origin develop
   ```

## Environment-Specific Deployments

### Development
- **Branch**: `develop`
- **Trigger**: Push to develop
- **Environment**: Development server
- **API**: Mock APIs enabled

### Staging
- **Branch**: `main`
- **Trigger**: Pull request to main
- **Environment**: Staging server
- **API**: Real APIs (staging)

### Production
- **Branch**: `main`
- **Trigger**: Tag creation
- **Environment**: Production server
- **API**: Real APIs (production)

## Git Hooks Configuration

### Pre-commit Hook
```bash
#!/bin/sh
# .husky/pre-commit
npm run lint
npm run type-check
npm run test
```

### Pre-push Hook
```bash
#!/bin/sh
# .husky/pre-push
npm run build
```

## Rollback Strategy

### Quick Rollback
```bash
# Identify previous stable commit
git log --oneline

# Rollback to previous commit
git revert <commit-hash>
git push origin main
```

### Emergency Rollback
```bash
# Reset to previous tag
git checkout v1.1.0
git push -f origin v1.1.0:main
```

## Team Guidelines

### Code Review Process
1. **Self-review**: Review your own code first
2. **Peer review**: At least one team member review
3. **Lead review**: For critical changes
4. **Approval**: Merge after approval

### Review Checklist
- Code follows architectural patterns
- Types are properly defined
- Error handling is implemented
- Tests are adequate
- Documentation is updated
- Performance implications considered
- Security implications reviewed

### Conflict Resolution
- Communicate with team members
- Use descriptive commit messages
- Keep branches up-to-date with main/develop
- Resolve conflicts locally before pushing
