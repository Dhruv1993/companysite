#!/usr/bin/env bash
set -euo pipefail

# Load env files (Vite uses VITE_* at build time)
for f in .env .env.local .env.production; do
  if [[ -f "$f" ]]; then
    set -a
    . "$f"
    set +a
  fi
done

# Usage: ./scripts/deploy.sh <projectId> [channel|live]
# Examples:
#   ./scripts/deploy.sh your-firebase-project-id        # deploy to live
#   ./scripts/deploy.sh your-firebase-project-id staging # deploy to preview channel "staging"

PROJECT_ID="${1:-}"
CHANNEL="${2:-live}"

if [[ -z "${PROJECT_ID}" ]]; then
  echo "Usage: $0 <projectId> [channel|live]"
  exit 1
fi

# Ensure dependencies
if ! command -v firebase >/dev/null 2>&1; then
  echo "firebase CLI not found. Install with: npm i -g firebase-tools"
  exit 1
fi

# Install deps and build
if [[ -f package-lock.json ]]; then
  npm ci
else
  npm install
fi
npm run build

# Deploy
if [[ "${CHANNEL}" == "live" ]]; then
  firebase deploy --project "${PROJECT_ID}" --only hosting
else
  firebase hosting:channel:deploy "${CHANNEL}" --project "${PROJECT_ID}"
fi

echo "Done."
