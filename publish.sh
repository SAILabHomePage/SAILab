#!/bin/bash
set -e

if [ -n "$(git status --porcelain)" ]; then
  echo "Working tree has changes."
  git status --short
  read -rp "Enter commit message for this update: " commit_msg
  if [ -z "$commit_msg" ]; then
    echo "Commit message is required."
    exit 1
  fi
  git add .
  git commit -m "$commit_msg"
else
  echo "No local changes to commit."
fi

git push origin main

echo "Pushed to origin/main. GitHub Pages will rebuild automatically."
