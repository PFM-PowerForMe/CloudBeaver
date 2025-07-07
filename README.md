<img src="https://github.com/dbeaver/cloudbeaver/wiki/images/cloudbeaver-logo.png" align="right" width="250"/>

# CloudBeaver Community

Cloud Database Manager - Community Edition.  
CloudBeaver is a web server that provides a rich web interface. The server itself is a Java application, and the web part is written in TypeScript and React.  
It is free to use and open-source (licensed under [Apache 2](https://github.com/dbeaver/cloudbeaver/blob/devel/LICENSE) license).  
See our [WIKI](https://github.com/dbeaver/cloudbeaver/wiki) for more details. 

<a><img src="https://github.com/dbeaver/cloudbeaver/wiki/images/connection-creation-demo.png" width="400"/></a>
<img src="https://github.com/dbeaver/cloudbeaver/wiki/images/gis-demo.png" width="400"/>
<img src="https://github.com/dbeaver/cloudbeaver/wiki/images/data-transfer-demo.png" width="400"/>
<img src="https://github.com/dbeaver/cloudbeaver/wiki/images/sql-editor-demo.png" width="400"/>

## Run in Docker

- [Official Docker repository](https://hub.docker.com/r/dbeaver/cloudbeaver)
- [Deployment instructions](https://github.com/dbeaver/cloudbeaver/wiki/CloudBeaver-Deployment)

## Demo server

You can see a live demo of CloudBeaver here: https://demo.cloudbeaver.io  

[Database access instructions](https://github.com/dbeaver/cloudbeaver/wiki/Demo-Server)

## Changelog

### 25.1.2 2025-07-07
- The CloudBeaver default theme matches the device theme by default now. You can change this behavior in user preferences under the Theme section;
- Added a button “Clear” to the Output panel;
- Changed the data transfer mechanism to avoid intermediate file creation. The parameter dataExportFileSizeLimit was removed from the server configuration as deprecated;
- PostgresSQL: fixed misplaced comment for table DDL generation.

### 25.1.1 2025-06-23
### Changes since 25.1.0:
- Added a search panel for SQL Editor and Value panel: press Ctrl+F to open a panel that allows searching and replacing by keyword or regular expression.
- Added a new welcome screen for a freshly opened application. This screen contains shortcuts to create a new connection, open SQL editor or documentation.
- Databend database support has been added.

### 25.1.0 2025-06-02
### Changes since 25.0.0:
- Important:
  -    Connection templates were removed from the application. You can use the Connection Editor to create new connections.
- Administration:
  -    Log records now capture create, update, and delete actions for users, teams, and connections for improved tracking and transparency.
- LDAP authorization:
  -    Added support for secure [LDAP authentication over SSL](https://github.com/dbeaver/cloudbeaver/wiki/LDAP-Authentication);
  -    Brute force protection is now supported for LDAP authentication. All authentication methods on the application level have this security mechanism.
- SQL Editor:
  -    A new setting to autosave scripts in the SQL editor appeared in global and users' preferences;
  -    Auto-completion has been improved for aliases and camelCase entities.
- Data Editor:
  -    Improved table rendering to scale column width depending on the content;
  -    Accessibility: improved keyboard navigation by sorting buttons in column headers.
- General:
  -    Added the ability to configure the default database or schema in the connection configuration;
  -    Enhanced initial configuration stage security: a server needs to be restarted if the initial setup time exceeds 1 hour;
  -    Improved Navigation tree performance: lost connection does not lead to the application freezing anymore;
  -    Data transfer: Improved export/import functionality performance by optimizing disk memory consumption;
  -    Vietnamese localization has been added (thanks to [0xhanh](https://github.com/0xhanh)).
- Databases and drivers:
  -    Clickhouse: driver has been updated to version 0.8.5;
  -    DuckDB: expanded the list of system objects that can be hidden in the Navigation tree;
  -    LibSQL: added the ability to connect using token authentication;
  -    Oracle: users' DDL in Oracle is displayed in the metadata editor on the corresponding tab for users with Oracle administration permissions;
  -    SQLite: added information about a table's Strict mode to the table metadata section (thanks to [eusebe-cda](https://github.com/eusebe-cda)).

## Contribution
As a community-driven open-source project, we warmly welcome contributions through GitHub pull requests. 

[We are happy to reward](https://dbeaver.com/help-dbeaver/) our most active contributors every major sprint.
The most significant contribution to our code for the major release 25.1.0 was made by:
1. [0xhanh](https://github.com/0xhanh) - for Vietnamese localization.
