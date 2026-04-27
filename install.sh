#!/bin/bash
# YouTube Marketing Skills — Install Script
# Usage: curl -fsSL https://raw.githubusercontent.com/adityaarsharma/youtube-marketing-skills/main/install.sh | bash

set -e

REPO="adityaarsharma/youtube-marketing-skills"
INSTALL_DIR="$HOME/.claude/skills/youtube-marketing"
CLAUDE_SETTINGS="$HOME/.claude/settings.json"

echo ""
echo "Installing YouTube Marketing Skills..."
echo ""

# Check Node.js
if ! command -v node &>/dev/null; then
  echo "Error: Node.js is required. Install from https://nodejs.org"
  exit 1
fi

# Clone or update
if [ -d "$INSTALL_DIR" ]; then
  echo "Updating existing install at $INSTALL_DIR"
  git -C "$INSTALL_DIR" pull --quiet
else
  echo "Cloning to $INSTALL_DIR"
  git clone --quiet "https://github.com/$REPO.git" "$INSTALL_DIR"
fi

# Install dependencies
cd "$INSTALL_DIR"
npm install --quiet

echo ""
echo "Skill files installed at: $INSTALL_DIR/skills/youtube-marketing/"
echo ""
echo "Next steps:"
echo ""
echo "  1. Add to Claude Code settings (~/.claude/settings.json):"
echo '     "skills": ["'"$INSTALL_DIR"'/skills/youtube-marketing/SKILL.md"]'
echo ""
echo "  2. (Optional) Add the MCP server for direct YouTube API access:"
echo '     "mcpServers": {'
echo '       "youtube-marketing": {'
echo '         "command": "node",'
echo '         "args": ["'"$INSTALL_DIR"'/server.js"]'
echo '       }'
echo '     }'
echo ""
echo "  3. (Optional) Set up YouTube OAuth for MCP tools:"
echo "     node $INSTALL_DIR/auth.js"
echo ""
echo "Done. Open Claude Code and try /youtube ideate"
echo ""
