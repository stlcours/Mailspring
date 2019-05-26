const { localized } = require('../src/intl');

module.exports = {
  menu: [
    {
      label: 'Mailspring',
      submenu: [
        { label: localized('About Mailspring'), command: 'application:about' },
        { label: localized('View License'), command: 'application:view-license' },
        { type: 'separator' },
        { label: localized('Preferences'), command: 'application:open-preferences' },
        { label: localized('Change Theme') + '...', command: 'window:launch-theme-picker' },
        { label: localized('Install Theme') + '...', command: 'window:install-package' },
        { type: 'separator' },
        {
          label: localized('Add Account') + '...',
          command: 'application:add-account',
          args: { source: 'Menu' },
        },
        { label: 'VERSION', enabled: false },
        {
          label: localized('Restart and Install Update'),
          command: 'application:install-update',
          visible: false,
        },
        {
          label: localized('Check for Updates'),
          command: 'application:check-for-update',
          visible: false,
        },
        { label: localized('Downloading Update'), enabled: false, visible: false },
        { type: 'separator' },
        { type: 'separator' },
        { label: localized('Services'), submenu: [] },
        { type: 'separator' },
        { label: localized('Hide Mailspring'), command: 'application:hide' },
        { label: localized('Hide Others'), command: 'application:hide-other-applications' },
        { label: localized('Show All'), command: 'application:unhide-all-applications' },
        { type: 'separator' },
        { label: localized('Quit'), command: 'application:quit' },
      ],
    },
    {
      label: localized('File'),
      submenu: [
        { label: localized('Sync New Mail Now'), command: 'window:sync-mail-now' },
        { type: 'separator' },
        { label: localized('New Message'), command: 'application:new-message' },
        { type: 'separator' },
        { label: localized('Close Window'), command: 'window:close' },
        { type: 'separator' },
        { label: localized('Print Current Thread'), command: 'core:print-thread' },
      ],
    },

    {
      label: localized('Edit'),
      submenu: [
        { label: localized('Undo'), command: 'core:undo' },
        { label: localized('Redo'), command: 'core:redo' },
        { type: 'separator' },
        { label: localized('Cut'), command: 'core:cut' },
        { label: localized('Copy'), command: 'core:copy' },
        { label: localized('Paste'), command: 'core:paste' },
        { label: localized('Paste and Match Style'), command: 'core:paste-and-match-style' },
        { label: localized('Select All'), command: 'core:select-all' },
        { type: 'separator' },
        { label: localized('Select All Read'), command: 'thread-list:select-read' },
        { label: localized('Select All Unread'), command: 'thread-list:select-unread' },
        { label: localized('Select All Starred'), command: 'thread-list:select-starred' },
        { label: localized('Select All Unstarred'), command: 'thread-list:select-unstarred' },
        { type: 'separator' },
        {
          label: localized('Find'),
          submenu: [
            { label: localized('Find in Mailbox') + '...', command: 'core:focus-search' },
            { label: localized('Find in Thread') + '...', command: 'core:find-in-thread' },
            { label: localized('Find Next'), command: 'core:find-in-thread-next' },
            { label: localized('Find Previous'), command: 'core:find-in-thread-previous' },
          ],
        },
      ],
    },

    {
      label: localized('View'),
      submenu: [
        {
          label: localized('Reading Pane Off'),
          type: 'radio',
          command: 'navigation:select-split-mode',
          checked: true,
          hideWhenDisabled: true,
        },
        {
          label: localized('Reading Pane On'),
          type: 'radio',
          command: 'navigation:select-split-mode',
          checked: false,
          hideWhenDisabled: true,
        },
        {
          label: localized('Reading Pane Off'),
          type: 'radio',
          command: 'navigation:select-list-mode',
          checked: false,
          hideWhenDisabled: true,
        },
        {
          label: localized('Reading Pane On'),
          type: 'radio',
          command: 'navigation:select-list-mode',
          checked: true,
          hideWhenDisabled: true,
        },
        {
          type: 'separator',
        },
        {
          label: localized('Go to %@', localized('Inbox')),
          command: 'navigation:go-to-inbox',
          id: 'first',
        },
        { label: localized('Go to %@', localized('Starred')), command: 'navigation:go-to-starred' },
        { label: localized('Go to %@', localized('Sent Mail')), command: 'navigation:go-to-sent' },
        { label: localized('Go to %@', localized('Drafts')), command: 'navigation:go-to-drafts' },
        { label: localized('Go to %@', localized('All Mail')), command: 'navigation:go-to-all' },
        { type: 'separator' },
        { label: localized('Enter Full Screen'), command: 'window:toggle-full-screen' },
        {
          label: localized('Exit Full Screen'),
          command: 'window:toggle-full-screen',
          visible: false,
        },
      ],
    },

    {
      label: localized('Thread'),
      submenu: [
        { label: localized('Reply'), command: 'core:reply' },
        { label: localized('Reply All'), command: 'core:reply-all' },
        { label: localized('Forward'), command: 'core:forward' },
        { type: 'separator' },
        { label: localized('Mark as %@', localized('Unread')), command: 'core:mark-as-unread' },
        { label: localized('Mark as %@', localized('Read')), command: 'core:mark-as-read' },
        { label: localized('Mark as %@', localized('Spam')), command: 'core:report-as-spam' },
        { label: localized('Mark as %@', localized('Not Spam')), command: 'core:report-not-spam' },
        {
          label: localized('Mark as Important'),
          command: 'core:mark-important',
          hideWhenDisabled: true,
        },
        {
          label: localized('Mark as Not Important'),
          command: 'core:mark-unimportant',
          hideWhenDisabled: true,
        },
        { label: localized('Star'), command: 'core:star-item' },
        { label: localized('Snooze') + '...', command: 'core:snooze-item' },
        { type: 'separator' },
        { label: localized('Share this thread') + '...', command: 'core:share-item-link' },
        { label: localized('Copy mailbox permalink'), command: 'core:copy-mailbox-link' },
        { type: 'separator' },
        { label: localized('Remove from view'), command: 'core:remove-from-view' },
        { label: localized('Remove and show next'), command: 'core:remove-and-next' },
        { label: localized('Remove and show previous'), command: 'core:remove-and-previous' },
        { type: 'separator' },
        { label: localized('Move to Trash'), command: 'core:delete-item' },
        {
          label: localized('Move to Archive'),
          command: 'core:archive-item',
          hideWhenDisabled: true,
        },
        { label: localized('Move to Folder') + '...', command: 'core:change-folders' },
        {
          label: localized('Apply Label') + '...',
          command: 'core:change-labels',
          hideWhenDisabled: true,
        },
        { type: 'separator' },
        {
          label: localized('Expand / collapse conversation'),
          command: 'message-list:toggle-expanded',
        },
      ],
    },

    {
      label: localized('Developer'),
      submenu: [
        {
          label: localized('Run with Debug Flags'),
          type: 'checkbox',
          command: 'application:toggle-dev',
        },
        { type: 'separator' },
        { label: localized('Calendar Preview'), command: 'application:show-calendar' },
        { type: 'separator' },
        { label: localized('Create a Plugin') + '...', command: 'window:create-package' },
        { label: localized('Install a Plugin') + '...', command: 'window:install-package' },
        { type: 'separator' },
        { label: localized('Reload'), command: 'window:reload' },
        { label: localized('Toggle Localizer Tools'), command: 'window:toggle-localizer-tools' },
        { label: localized('Toggle Developer Tools'), command: 'window:toggle-dev-tools' },
        {
          label: localized('Toggle Component Regions'),
          command: 'window:toggle-component-regions',
        },
        { label: localized('Toggle Screenshot Mode'), command: 'window:toggle-screenshot-mode' },
        { type: 'separator' },
        { label: localized('Attach Mailsync to Xcode'), command: 'window:attach-to-xcode' },
        { label: localized('Open Mailsync Logs'), command: 'window:open-mailsync-logs' },
      ],
    },
    {
      label: localized('Window'),
      submenu: [
        { label: localized('Minimize'), command: 'application:minimize' },
        { label: localized('Zoom'), command: 'application:zoom' },
        { type: 'separator', id: 'window-list-separator' },
        { type: 'separator' },
        {
          label: localized('Bring All to Front'),
          command: 'application:bring-all-windows-to-front',
        },
      ],
    },

    {
      label: localized('Help'),
      submenu: [{ label: localized('Mailspring Help'), command: 'application:view-help' }],
    },
  ],
};
