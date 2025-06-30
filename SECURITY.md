# 🔐 Security Policy

## 🚨 What to do in case of a security incident

1. **Isolate the system**: Disable public access or deployment temporarily.
2. **Contact immediately**:
   - Project Lead: [Name, Email]
   - Dev Team: [Email or GitLab handles]
3. **Diagnose**: Identify suspicious commits or behaviors in the code.
4. **Restart or recover**: Roll back to a stable commit or restore backup.
5. **Document**: Create a GitLab issue describing the incident.

## 🧯 Recovery Steps

- Restore from the last known clean commit.
- Remove or fix the compromised files.
- Rotate any compromised keys or secrets.

## 🛡️ Prevention Best Practices

- `.env` files are not committed.
- `.env.example` provided for safe configuration reference.
- No hardcoded secrets in the codebase.
- All user input is sanitized.
- Input validation is enforced client- and server-side.

---

## 🛠️ Simulated Incident: Page defacement

### Symptoms:
- Fake message “YOU HAVE BEEN HACKED” on the homepage.
- Redirect to an external malicious link.

### Suspected Cause:
- XSS vulnerability due to missing input sanitization.

### Actions Taken:
- Identified vulnerable input field.
- Sanitized and validated user inputs.
- Updated code and committed secure version.

---

## 🔁 Response Protocol Summary

1. Detect the issue
2. Isolate the affected parts
3. Notify the team and escalate if needed
4. Mitigate and restore
5. Document and prevent recurrence
