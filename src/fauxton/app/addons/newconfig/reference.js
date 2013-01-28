define([
],

function () {

  // Find settings / defaults / descriptsions at:
  // * https://github.com/apache/couchdb/blob/master/etc/couchdb/default.ini.tpl.in
  // * https://github.com/apache/couchdb/blob/master/etc/couchdb/local.ini

  ConfigReference = [
    {
      "name": "httpd_design_handlers",
      "values": [
        {
          "name": "_info",
          "default": "{couch_httpd_db,   handle_design_info_req}",
          "description": ""
        },
        {
          "name": "_list",
          "default": "{couch_httpd_show, handle_view_list_req}",
          "description": ""
        },
        {
          "name": "_rewrite",
          "default": "{couch_httpd_rewrite, handle_rewrite_req}",
          "description": ""
        },
        {
          "name": "_show",
          "default": "{couch_httpd_show, handle_doc_show_req}",
          "description": ""
        },
        {
          "name": "_update",
          "default": "{couch_httpd_show, handle_doc_update_req}",
          "description": ""
        },
        {
          "name": "_view",
          "default": "{couch_httpd_view, handle_view_req}",
          "description": ""
        }
      ],
      "description": ""
    },
    {
      "name": "uuids",
      "values": [
        {
          "name": "algorithm",
          "default": "sequential",
          "description": "Known algorithms:\n  random - 128 bits of random awesome\n    All awesome, all the time.\n  sequential - monotonically increasing ids with random increments\n    First 26 hex characters are random. Last 6 increment in\n    random amounts until an overflow occurs. On overflow, the\n    random prefix is regenerated and the process starts over.\n  utc_random - Time since Jan 1, 1970 UTC with microseconds\n    First 14 characters are the time in hex. Last 18 are random.\n  utc_id - Time since Jan 1, 1970 UTC with microseconds, plus utc_id_suffix string\n    First 14 characters are the time in hex. uuids/utc_id_suffix string value is appended to these."
        }
      ],
      "description": "Some description about uuids yo"
    },
    {
      "name": "stats",
      "values": [
        {
          "name": "rate",
          "default": "1000",
          "description": ""
        },
        {
          "name": "samples",
          "default": "[0, 60, 300, 900]",
          "description": ""
        }
      ],
      "description": ""
    },
    {
      "name": "httpd_global_handlers",
      "values": [
        {
          "name": "/",
          "default": "{couch_httpd_misc_handlers, handle_welcome_req, <<\"Welcome\">>}",
          "description": ""
        },
        {
          "name": "_active_tasks",
          "default": "{couch_httpd_misc_handlers, handle_task_status_req}",
          "description": ""
        },
        {
          "name": "_all_dbs",
          "default": "{couch_httpd_misc_handlers, handle_all_dbs_req}",
          "description": ""
        },
        {
          "name": "_config",
          "default": "{couch_httpd_misc_handlers, handle_config_req}",
          "description": ""
        },
        {
          "name": "_events",
          "default": "{couch_httpd_proxy, handle_proxy_req, <<\"http://127.0.0.1:8125\">>}",
          "description": ""
        },
        {
          "name": "_log",
          "default": "{couch_httpd_misc_handlers, handle_log_req}",
          "description": ""
        },
        {
          "name": "_oauth",
          "default": "{couch_httpd_oauth, handle_oauth_req}",
          "description": ""
        },
        {
          "name": "_replicate",
          "default": "{couch_httpd_replicator, handle_req}",
          "description": ""
        },
        {
          "name": "_restart",
          "default": "{couch_httpd_misc_handlers, handle_restart_req}",
          "description": ""
        },
        {
          "name": "_session",
          "default": "{couch_httpd_auth, handle_session_req}",
          "description": ""
        },
        {
          "name": "_stats",
          "default": "{couch_httpd_stats_handlers, handle_stats_req}",
          "description": ""
        },
        {
          "name": "_utils",
          "default": "{couch_httpd_misc_handlers, handle_utils_dir_req, \"/usr/local/Cellar/couchdb/1.2.1/share/couchdb/www\"}",
          "description": ""
        },
        {
          "name": "_uuids",
          "default": "{couch_httpd_misc_handlers, handle_uuids_req}",
          "description": ""
        },
        {
          "name": "favicon.ico",
          "default": "{couch_httpd_misc_handlers, handle_favicon_req, \"/usr/local/Cellar/couchdb/1.2.1/share/couchdb/www\"}",
          "description": ""
        }
      ],
      "description": ""
    },
    {
      "name": "attachments",
      "values": [
        {
          "name": "compressible_types",
          "default": "text/*, application/javascript, application/json, application/xml",
          "description": ""
        },
        {
          "name": "compression_level",
          "default": "8",
          "description": ""
        }
      ],
      "description": ""
    },
    {
      "name": "query_server_config",
      "values": [
        {
          "name": "os_process_limit",
          "default": "25",
          "description": ""
        },
        {
          "name": "reduce_limit",
          "default": "true",
          "description": ""
        }
      ],
      "description": ""
    },
    {
      "name": "replicator",
      "values": [
        {
          "name": "connection_timeout",
          "default": "30000",
          "description": ""
        },
        {
          "name": "db",
          "default": "_replicator",
          "description": ""
        },
        {
          "name": "http_connections",
          "default": "20",
          "description": ""
        },
        {
          "name": "max_replication_retry_count",
          "default": "10",
          "description": ""
        },
        {
          "name": "retries_per_request",
          "default": "10",
          "description": ""
        },
        {
          "name": "socket_options",
          "default": "[{keepalive, true}, {nodelay, false}]",
          "description": ""
        },
        {
          "name": "ssl_certificate_max_depth",
          "default": "3",
          "description": ""
        },
        {
          "name": "verify_ssl_certificates",
          "default": "false",
          "description": ""
        },
        {
          "name": "worker_batch_size",
          "default": "500",
          "description": ""
        },
        {
          "name": "worker_processes",
          "default": "4",
          "description": ""
        }
      ],
      "description": ""
    },
    {
      "name": "couch_httpd_oauth",
      "values": [
        {
          "name": "use_users_db",
          "default": "false",
          "description": ""
        }
      ],
      "description": ""
    },
    {
      "name": "ssl",
      "values": [
        {
          "name": "port",
          "default": "6984",
          "description": ""
        }
      ],
      "description": ""
    },
    {
      "name": "log",
      "values": [
        {
          "name": "file",
          "default": "/usr/local/var/log/couchdb/couch.log",
          "description": ""
        },
        {
          "name": "include_sasl",
          "default": "true",
          "description": ""
        },
        {
          "name": "level",
          "default": "debug",
          "description": ""
        }
      ],
      "description": ""
    },
    {
      "name": "view_compaction",
      "values": [
        {
          "name": "keyvalue_buffer_size",
          "default": "2097152",
          "description": ""
        }
      ],
      "description": ""
    },
    {
      "name": "query_servers",
      "values": [
        {
          "name": "coffeescript",
          "default": "/usr/local/Cellar/couchdb/1.2.1/bin/couchjs /usr/local/Cellar/couchdb/1.2.1/share/couchdb/server/main-coffee.js",
          "description": ""
        },
        {
          "name": "javascript",
          "default": "/usr/local/Cellar/couchdb/1.2.1/bin/couchjs /usr/local/Cellar/couchdb/1.2.1/share/couchdb/server/main.js",
          "description": ""
        }
      ],
      "description": ""
    },
    {
      "name": "daemons",
      "values": [
        {
          "name": "auth_cache",
          "default": "{couch_auth_cache, start_link, []}",
          "description": ""
        },
        {
          "name": "compaction_daemon",
          "default": "{couch_compaction_daemon, start_link, []}",
          "description": ""
        },
        {
          "name": "external_manager",
          "default": "{couch_external_manager, start_link, []}",
          "description": ""
        },
        {
          "name": "httpd",
          "default": "{couch_httpd, start_link, []}",
          "description": ""
        },
        {
          "name": "os_daemons",
          "default": "{couch_os_daemons, start_link, []}",
          "description": ""
        },
        {
          "name": "query_servers",
          "default": "{couch_query_servers, start_link, []}",
          "description": ""
        },
        {
          "name": "replication_manager",
          "default": "{couch_replication_manager, start_link, []}",
          "description": ""
        },
        {
          "name": "stats_aggregator",
          "default": "{couch_stats_aggregator, start, []}",
          "description": ""
        },
        {
          "name": "stats_collector",
          "default": "{couch_stats_collector, start, []}",
          "description": ""
        },
        {
          "name": "uuids",
          "default": "{couch_uuids, start, []}",
          "description": ""
        },
        {
          "name": "vhosts",
          "default": "{couch_httpd_vhost, start_link, []}",
          "description": ""
        },
        {
          "name": "view_manager",
          "default": "{couch_view, start_link, []}",
          "description": ""
        }
      ],
      "description": ""
    },
    {
      "name": "httpd",
      "values": [
        {
          "name": "allow_jsonp",
          "default": "false",
          "description": ""
        },
        {
          "name": "authentication_handlers",
          "default": "{couch_httpd_oauth, oauth_authentication_handler}, {couch_httpd_auth, default_authentication_handler}, {couch_httpd_auth, cookie_authentication_handler}",
          "description": ""
        },
        {
          "name": "bind_address",
          "default": "127.0.0.1",
          "description": ""
        },
        {
          "name": "default_handler",
          "default": "{couch_httpd_db, handle_request}",
          "description": ""
        },
        {
          "name": "log_max_chunk_size",
          "default": "1000000",
          "description": ""
        },
        {
          "name": "port",
          "default": "5984",
          "description": ""
        },
        {
          "name": "secure_rewrites",
          "default": "false",
          "description": ""
        },
        {
          "name": "vhost_global_handlers",
          "default": "_utils, _uuids, _session, _oauth, _users",
          "description": ""
        }
      ],
      "description": ""
    },
    {
      "name": "httpd_db_handlers",
      "values": [
        {
          "name": "_changes",
          "default": "{couch_httpd_db, handle_changes_req}",
          "description": ""
        },
        {
          "name": "_compact",
          "default": "{couch_httpd_db, handle_compact_req}",
          "description": ""
        },
        {
          "name": "_design",
          "default": "{couch_httpd_db, handle_design_req}",
          "description": ""
        },
        {
          "name": "_temp_view",
          "default": "{couch_httpd_view, handle_temp_view_req}",
          "description": ""
        },
        {
          "name": "_view_cleanup",
          "default": "{couch_httpd_db, handle_view_cleanup_req}",
          "description": ""
        }
      ],
      "description": ""
    },
    {
      "name": "database_compaction",
      "values": [
        {
          "name": "checkpoint_after",
          "default": "5242880",
          "description": ""
        },
        {
          "name": "doc_buffer_size",
          "default": "524288",
          "description": ""
        }
      ],
      "description": ""
    },
    {
      "name": "couch_httpd_auth",
      "values": [
        {
          "name": "allow_persistent_cookies",
          "default": "true",
          "description": ""
        },
        {
          "name": "auth_cache_size",
          "default": "50",
          "description": ""
        },
        {
          "name": "authentication_db",
          "default": "_users",
          "description": ""
        },
        {
          "name": "authentication_redirect",
          "default": "/_utils/session.html",
          "description": ""
        },
        {
          "name": "require_valid_user",
          "default": "false",
          "description": ""
        },
        {
          "name": "secret",
          "default": "78875068a1979fb910d5d8f37d316aa4",
          "description": ""
        },
        {
          "name": "timeout",
          "default": "1209600",
          "description": ""
        }
      ],
      "description": ""
    },
    {
      "name": "os_daemons",
      "values": [
        {
          "name": "livelyevents_daemon",
          "default": "node /Users/gregor/couches/LivelyCouch/lively-events.js",
          "description": ""
        }
      ],
      "description": ""
    },
    {
      "name": "couchdb",
      "values": [
        {
          "name": "database_dir",
          "default": "/usr/local/var/lib/couchdb",
          "description": ""
        },
        {
          "name": "delayed_commits",
          "default": "true",
          "description": ""
        },
        {
          "name": "file_compression",
          "default": "snappy",
          "description": ""
        },
        {
          "name": "max_dbs_open",
          "default": "1000",
          "description": ""
        },
        {
          "name": "max_document_size",
          "default": "4294967296",
          "description": ""
        },
        {
          "name": "os_process_timeout",
          "default": "5000",
          "description": ""
        },
        {
          "name": "uri_file",
          "default": "/usr/local/var/run/couchdb/couch.uri",
          "description": ""
        },
        {
          "name": "util_driver_dir",
          "default": "/usr/local/Cellar/couchdb/1.2.1/lib/couchdb/erlang/lib/couch-1.2.1/priv/lib",
          "description": ""
        },
        {
          "name": "view_index_dir",
          "default": "/usr/local/var/lib/couchdb",
          "description": ""
        }
      ],
      "description": ""
    },
    {
      "name": "compaction_daemon",
      "values": [
        {
          "name": "check_interval",
          "default": "300",
          "description": ""
        },
        {
          "name": "min_file_size",
          "default": "131072",
          "description": ""
        }
      ],
      "description": ""
    }
  ];

  return ConfigReference;
});

