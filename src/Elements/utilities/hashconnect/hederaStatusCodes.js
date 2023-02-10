const hederaStatusCodes = {
  OK: "The transaction passed the precheck validations.",
  INVALID_TRANSACTION:
    "For any error not handled by specific error codes listed below.",
  PAYER_ACCOUNT_NOT_FOUND: "Payer account does not exist.",
  INVALID_NODE_ACCOUNT:
    "Node Account provided does not match the node account of the node the transaction was submitted to.",
  TRANSACTION_EXPIRED:
    "Pre-Check error when TransactionValidStart + transactionValidDuration is less than current consensus time.",
  INVALID_TRANSACTION_START:
    "Transaction start time is greater than current consensus time",
  INVALID_TRANSACTION_DURATION:
    "The given transactionValidDuration was either non-positive, or greater than the maximum valid duration of 180 secs.",
  INVALID_SIGNATURE: "The transaction signature is not valid",
  MEMO_TOO_LONG: "Transaction memo size exceeded 100 bytes",
  INSUFFICIENT_TX_FEE:
    "The fee provided in the transaction is insufficient for this type of transaction",
  INSUFFICIENT_PAYER_BALANCE:
    "The payer account has insufficient cryptocurrency to pay the transaction fee",
  DUPLICATE_TRANSACTION:
    "This transaction ID is a duplicate of one that was submitted to this node or reached consensus in the last 180 seconds (receipt period)",
  BUSY: "If API is throttled out",
  NOT_SUPPORTED: "The API is not currently supported",
  INVALID_FILE_ID: "The file id is invalid or does not exist",
  INVALID_ACCOUNT_ID: "The account id is invalid or does not exist",
  INVALID_CONTRACT_ID: "The contract id is invalid or does not exist",
  INVALID_TRANSACTION_ID: "Transaction id is not valid",
  RECEIPT_NOT_FOUND: "Receipt for given transaction id does not exist",
  RECORD_NOT_FOUND: "Record for given transaction id does not exist",
  INVALID_SOLIDITY_ID:
    "The solidity id is invalid or entity with this solidity id does not exist",
  UNKNOWN:
    "The responding node has submitted the transaction to the network. Its final status is still unknown.",
  SUCCESS: "The transaction succeeded",
  FAIL_INVALID:
    "There was a system error and the transaction failed because of invalid request parameters.",
  FAIL_FEE:
    "There was a system error while performing fee calculation, reserved for future.",
  FAIL_BALANCE:
    "There was a system error while performing balance checks, reserved for future.",
  KEY_REQUIRED: "Key not provided in the transaction body",
  BAD_ENCODING:
    "Unsupported algorithm/encoding used for keys in the transaction",
  INSUFFICIENT_ACCOUNT_BALANCE:
    "When the account balance is not sufficient for the transfer",
  INVALID_SOLIDITY_ADDRESS:
    "During an update transaction when the system is not able to find the Users Solidity address",
  INSUFFICIENT_GAS: "Not enough gas was supplied to execute transaction",
  CONTRACT_SIZE_LIMIT_EXCEEDED: "contract byte code size is over the limit",
  LOCAL_CALL_MODIFICATION_EXCEPTION:
    "local execution (query) is requested for a function which changes state",
  CONTRACT_REVERT_EXECUTED: "Contract REVERT OPCODE executed",
  CONTRACT_EXECUTION_EXCEPTION:
    "For any contract execution related error not handled by specific error codes listed above.",
  INVALID_RECEIVING_NODE_ACCOUNT:
    "In Query validation, account with +ve(amount) value should be Receiving node account, the receiver account should be only one account in the list",
  MISSING_QUERY_HEADER: "Header is missing in Query request",
  ACCOUNT_UPDATE_FAILED: "The update of the account failed",
  INVALID_KEY_ENCODING: "Provided key encoding was not supported by the system",
  NULL_SOLIDITY_ADDRESS: "null solidity address",
  CONTRACT_UPDATE_FAILED: "update of the contract failed",
  INVALID_QUERY_HEADER: "the query header is invalid",
  INVALID_FEE_SUBMITTED: "Invalid fee submitted",
  INVALID_PAYER_SIGNATURE: "Payer signature is invalid",
  KEY_NOT_PROVIDED: "The keys were not provided in the request.",
  INVALID_EXPIRATION_TIME:
    "Expiration time provided in the transaction was invalid.",
  NO_WACL_KEY: "WriteAccess Control Keys are not provided for the file",
  FILE_CONTENT_EMPTY: "The contents of file are provided as empty.",
  INVALID_ACCOUNT_AMOUNTS:
    "The crypto transfer credit and debit do not sum equal to 0",
  EMPTY_TRANSACTION_BODY: "Transaction body provided is empty",
  INVALID_TRANSACTION_BODY: "Invalid transaction body provided",
  INVALID_SIGNATURE_TYPE_MISMATCHING_KEY:
    "the type of key (base ed25519 key, KeyList, or ThresholdKey) does not match the type of signature (base ed25519 signature, SignatureList, or ThresholdKeySignature)",
  INVALID_SIGNATURE_COUNT_MISMATCHING_KEY:
    "the number of key (KeyList, or ThresholdKey) does not match that of signature (SignatureList, or ThresholdKeySignature). e.g. if a keyList has 3 base keys, then the corresponding signatureList should also have 3 base signatures.",
  EMPTY_LIVE_HASH_BODY: "the livehash body is empty",
  EMPTY_LIVE_HASH: "the livehash data is missing",
  EMPTY_LIVE_HASH_KEYS: "the keys for a livehash are missing",
  INVALID_LIVE_HASH_SIZE:
    "the livehash data is not the output of a SHA-384 digest",
  EMPTY_QUERY_BODY: "the query body is empty",
  EMPTY_LIVE_HASH_QUERY: "the crypto livehash query is empty",
  LIVE_HASH_NOT_FOUND: "the livehash is not present",
  ACCOUNT_ID_DOES_NOT_EXIST: "the account id passed has not yet been created.",
  LIVE_HASH_ALREADY_EXISTS: "the livehash already exists for a given account",
  INVALID_FILE_WACL: "File WACL keys are invalid",
  SERIALIZATION_FAILED: "Serialization failure",
  TRANSACTION_OVERSIZE:
    "The size of the Transaction is greater than transactionMaxBytes",
  TRANSACTION_TOO_MANY_LAYERS: "The Transaction has more than 50 levels",
  CONTRACT_DELETED: "Contract is marked as deleted",
  PLATFORM_NOT_ACTIVE:
    "the platform node is either disconnected or lagging behind.",
  KEY_PREFIX_MISMATCH:
    "one public key matches more than one prefixes on the signature map",
  PLATFORM_TRANSACTION_NOT_CREATED:
    "transaction not created by platform due to large backlog",
  INVALID_RENEWAL_PERIOD:
    "auto renewal period is not a positive number of seconds",
  INVALID_PAYER_ACCOUNT_ID:
    "the response code when a smart contract id is passed for a crypto API request",
  ACCOUNT_DELETED: "the account has been marked as deleted",
  FILE_DELETED: "the file has been marked as deleted",
  ACCOUNT_REPEATED_IN_ACCOUNT_AMOUNTS:
    "same accounts repeated in the transfer account list",
  SETTING_NEGATIVE_ACCOUNT_BALANCE:
    "attempting to set negative balance value for crypto account",
  OBTAINER_REQUIRED:
    "when deleting smart contract that has crypto balance either transfer account or transfer smart contract is required",
  OBTAINER_SAME_CONTRACT_ID:
    "when deleting smart contract that has crypto balance you can not use the same contract id as transferContractId as the one being deleted",
  OBTAINER_DOES_NOT_EXIST:
    "transferAccountId or transferContractId specified for contract delete does not exist",
  MODIFYING_IMMUTABLE_CONTRACT:
    "attempting to modify (update or delete a immutable smart contract, i.e. one created without a admin key)",
  FILE_SYSTEM_EXCEPTION: "Unexpected exception thrown by file system functions",
  AUTORENEW_DURATION_NOT_IN_RANGE:
    "the duration is not a subset of [MINIMUM_AUTORENEW_DURATION,MAXIMUM_AUTORENEW_DURATION]",
  ERROR_DECODING_BYTESTRING:
    "Decoding the smart contract binary to a byte array failed. Check that the input is a valid hex string.",
  CONTRACT_FILE_EMPTY: "File to create a smart contract was of length zero",
  CONTRACT_BYTECODE_EMPTY: "Bytecode for smart contract is of length zero",
  INVALID_INITIAL_BALANCE: "Attempt to set negative initial balance",
  INVALID_RECEIVE_RECORD_THRESHOLD:
    "[Deprecated]. attempt to set negative receive record threshold",
  INVALID_SEND_RECORD_THRESHOLD:
    "[Deprecated]. attempt to set negative send record threshold",
  ACCOUNT_IS_NOT_GENESIS_ACCOUNT:
    "Special Account Operations should be performed by only Genesis account, return this code if it is not Genesis Account",
  PAYER_ACCOUNT_UNAUTHORIZED:
    "The fee payer account doesn't have permission to submit such Transaction",
  INVALID_FREEZE_TRANSACTION_BODY: "FreezeTransactionBody is invalid",
  FREEZE_TRANSACTION_BODY_NOT_FOUND: "FreezeTransactionBody does not exist",
  TRANSFER_LIST_SIZE_LIMIT_EXCEEDED:
    "Exceeded the number of accounts (both from and to) allowed for crypto transfer list",
  RESULT_SIZE_LIMIT_EXCEEDED:
    "Smart contract result size greater than specified maxResultSize",
  NOT_SPECIAL_ACCOUNT:
    "The payer account is not a special account(account 0.0.55)",
  CONTRACT_NEGATIVE_GAS: "Negative gas was offered in smart contract call",
  CONTRACT_NEGATIVE_VALUE:
    "Negative value / initial balance was specified in a smart contract call / create",
  INVALID_FEE_FILE: "Failed to update fee file",
  INVALID_EXCHANGE_RATE_FILE: "Failed to update exchange rate file",
  INSUFFICIENT_LOCAL_CALL_GAS:
    "Payment tendered for contract local call cannot cover both the fee and the gas",
  ENTITY_NOT_ALLOWED_TO_DELETE:
    "Entities with Entity ID below 1000 are not allowed to be deleted",
  AUTHORIZATION_FAILED:
    "Violating one of these rules: 1) treasury account can update all entities below 0.0.1000, 2) account 0.0.50 can update all entities from 0.0.51 - 0.0.80, 3) Network Function Master Account A/c 0.0.50 - Update all Network Function accounts & perform all the Network Functions listed below, 4) Network Function Accounts: i) A/c 0.0.55 - Update Address Book files (0.0.101/102), ii) A/c 0.0.56 - Update Fee schedule (0.0.111), iii) A/c 0.0.57 - Update Exchange Rate (0.0.112).",
  FILE_UPLOADED_PROTO_INVALID:
    "Fee Schedule Proto uploaded but not valid (append or update is required)",
  FILE_UPLOADED_PROTO_NOT_SAVED_TO_DISK:
    "Fee Schedule Proto uploaded but not valid (append or update is required)",
  FEE_SCHEDULE_FILE_PART_UPLOADED: "Fee Schedule Proto File Part uploaded",
  EXCHANGE_RATE_CHANGE_LIMIT_EXCEEDED:
    "The change on Exchange Rate exceeds Exchange_Rate_Allowed_Percentage",
  MAX_CONTRACT_STORAGE_EXCEEDED:
    "Contract permanent storage exceeded the currently allowable limit",
  TRANSFER_ACCOUNT_SAME_AS_DELETE_ACCOUNT:
    "Transfer Account should not be same as Account to be deleted",
  TOTAL_LEDGER_BALANCE_INVALID: "Total ledger balance is invalid",
  EXPIRATION_REDUCTION_NOT_ALLOWED:
    "The expiration date/time on a smart contract may not be reduced",
  MAX_GAS_LIMIT_EXCEEDED:
    "Gas exceeded currently allowable gas limit per transaction",
  MAX_FILE_SIZE_EXCEEDED: "File size exceeded the currently allowable limit",
  RECEIVER_SIG_REQUIRED:
    "When a valid signature is not provided for operations on account with receiverSigRequired=true",
  INVALID_TOPIC_ID: "The Topic ID specified is not in the system.",
  INVALID_ADMIN_KEY: "A provided admin key was invalid.",
  INVALID_SUBMIT_KEY: "A provided submit key was invalid.",
  UNAUTHORIZED:
    "An attempted operation was not authorized (ie - a deleteTopic for a topic with no adminKey).",
  INVALID_TOPIC_MESSAGE: "A ConsensusService message is empty.",
  INVALID_AUTORENEW_ACCOUNT:
    "The autoRenewAccount specified is not a valid, active account.",
  AUTORENEW_ACCOUNT_NOT_ALLOWED:
    "An adminKey was not specified on the topic, so there must not be an autoRenewAccount.",
  TOPIC_EXPIRED:
    "The topic has expired, was not automatically renewed, and is in a 7 day grace period before the topic will be deleted unrecoverably. This error response code will not be returned until autoRenew functionality is supported by HAPI.",
  INVALID_CHUNK_NUMBER:
    "chunk number must be from 1 to total (chunks) inclusive.",
  INVALID_CHUNK_TRANSACTION_ID:
    "For every chunk, the payer account that is part of initialTransactionID must match the Payer Account of this transaction. The entire initialTransactionID should match the transactionID of the first chunk, but this is not checked or enforced by Hedera except when the chunk number is 1.",
  ACCOUNT_FROZEN_FOR_TOKEN:
    "Account is frozen and cannot transact with the token",
  TOKENS_PER_ACCOUNT_LIMIT_EXCEEDED:
    "An involved account already has more than <tt>tokens.maxPerAccount</tt> associations with non-deleted tokens.",
  INVALID_TOKEN_ID: "The token is invalid or does not exist",
  INVALID_TOKEN_DECIMALS: "Invalid token decimals",
  INVALID_TOKEN_INITIAL_SUPPLY: "Invalid token initial supply",
  INVALID_TREASURY_ACCOUNT_FOR_TOKEN:
    "Treasury Account does not exist or is deleted",
  INVALID_TOKEN_SYMBOL:
    "Token Symbol is not UTF-8 capitalized alphabetical string",
  TOKEN_HAS_NO_FREEZE_KEY: "Freeze key is not set on token",
  TRANSFERS_NOT_ZERO_SUM_FOR_TOKEN: "Amounts in transfer list are not net zero",
  MISSING_TOKEN_SYMBOL: "A token symbol was not provided",
  TOKEN_SYMBOL_TOO_LONG: "The provided token symbol was too long",
  ACCOUNT_KYC_NOT_GRANTED_FOR_TOKEN:
    "KYC must be granted and account does not have KYC granted",
  TOKEN_HAS_NO_KYC_KEY: "KYC key is not set on token",
  INSUFFICIENT_TOKEN_BALANCE:
    "Token balance is not sufficient for the transaction",
  TOKEN_WAS_DELETED: "Token transactions cannot be executed on deleted token",
  TOKEN_HAS_NO_SUPPLY_KEY: "Supply key is not set on token",
  TOKEN_HAS_NO_WIPE_KEY: "Wipe key is not set on token",
  INVALID_TOKEN_MINT_AMOUNT:
    "The requested token mint amount would cause an invalid total supply",
  INVALID_TOKEN_BURN_AMOUNT:
    "The requested token burn amount would cause an invalid total supply",
  TOKEN_NOT_ASSOCIATED_TO_ACCOUNT:
    "A required token-account relationship is missing",
  CANNOT_WIPE_TOKEN_TREASURY_ACCOUNT:
    "The target of a wipe operation was the token treasury account",
  INVALID_KYC_KEY: "The provided KYC key was invalid.",
  INVALID_WIPE_KEY: "The provided wipe key was invalid.",
  INVALID_FREEZE_KEY: "The provided freeze key was invalid.",
  INVALID_SUPPLY_KEY: "The provided supply key was invalid.",
  MISSING_TOKEN_NAME: "Token Name is not provided",
  TOKEN_NAME_TOO_LONG: "Token Name is too long",
  INVALID_WIPING_AMOUNT:
    "The provided wipe amount must not be negative, zero or bigger than the token holder balance",
  TOKEN_IS_IMMUTABLE:
    "Token does not have Admin key set, thus update/delete transactions cannot be performed",
  TOKEN_ALREADY_ASSOCIATED_TO_ACCOUNT:
    "An <tt>associateToken</tt> operation specified a token already associated to the account",
  TRANSACTION_REQUIRES_ZERO_TOKEN_BALANCES:
    "An attempted operation is invalid until all token balances for the target account are zero",
  ACCOUNT_IS_TREASURY:
    "An attempted operation is invalid because the account is a treasury",
  TOKEN_ID_REPEATED_IN_TOKEN_LIST: "Same TokenIDs present in the token list",
  TOKEN_TRANSFER_LIST_SIZE_LIMIT_EXCEEDED:
    "Exceeded the number of token transfers (both from and to) allowed for token transfer list",
  EMPTY_TOKEN_TRANSFER_BODY:
    "TokenTransfersTransactionBody has no TokenTransferList",
  EMPTY_TOKEN_TRANSFER_ACCOUNT_AMOUNTS:
    "TokenTransfersTransactionBody has a TokenTransferList with no AccountAmounts",
  INVALID_SCHEDULE_ID:
    "The Scheduled entity does not exist; or has now expired, been deleted, or been executed",
  SCHEDULE_IS_IMMUTABLE:
    "The Scheduled entity cannot be modified. Admin key not set",
  INVALID_SCHEDULE_PAYER_ID: "The provided Scheduled Payer does not exist",
  INVALID_SCHEDULE_ACCOUNT_ID:
    "The Schedule Create Transaction TransactionID account does not exist",
  NO_NEW_VALID_SIGNATURES:
    "The provided sig map did not contain any new valid signatures from required signers of the scheduled transaction",
  UNRESOLVABLE_REQUIRED_SIGNERS:
    "The required signers for a scheduled transaction cannot be resolved, for example because they do not exist or have been deleted",
  SCHEDULED_TRANSACTION_NOT_IN_WHITELIST:
    "Only whitelisted transaction types may be scheduled",
  SOME_SIGNATURES_WERE_INVALID:
    "At least one of the signatures in the provided sig map did not represent a valid signature for any required signer",
  TRANSACTION_ID_FIELD_NOT_ALLOWED:
    "The scheduled field in the TransactionID may not be set to true",
  IDENTICAL_SCHEDULE_ALREADY_CREATED:
    "A schedule already exists with the same identifying fields of an attempted ScheduleCreate (that is, all fields other than scheduledPayerAccountID)",
  INVALID_ZERO_BYTE_IN_STRING:
    "A string field in the transaction has a UTF-8 encoding with the prohibited zero byte",
  SCHEDULE_ALREADY_DELETED:
    "A schedule being signed or deleted has already been deleted",
  SCHEDULE_ALREADY_EXECUTED:
    "A schedule being signed or deleted has already been executed",
  MESSAGE_SIZE_TOO_LARGE:
    "ConsensusSubmitMessage request's message size is larger than allowed.",
  OPERATION_REPEATED_IN_BUCKET_GROUPS:
    "An operation was assigned to more than one throttle group in a given bucket",
  BUCKET_CAPACITY_OVERFLOW:
    "The capacity needed to satisfy all opsPerSec groups in a bucket overflowed a signed 8-byte integral type",
  NODE_CAPACITY_NOT_SUFFICIENT_FOR_OPERATION:
    "Given the network size in the address book, the node-level capacity for an operation would never be enough to accept a single request; usually means a bucket burstPeriod should be increased",
  BUCKET_HAS_NO_THROTTLE_GROUPS:
    "A bucket was defined without any throttle groups",
  THROTTLE_GROUP_HAS_ZERO_OPS_PER_SEC:
    "A throttle group was granted zero opsPerSec",
  SUCCESS_BUT_MISSING_EXPECTED_OPERATION:
    "The throttle definitions file was updated, but some supported operations were not assigned a bucket",
  UNPARSEABLE_THROTTLE_DEFINITIONS:
    "The new contents for the throttle definitions system file were not valid protobuf",
  INVALID_THROTTLE_DEFINITIONS:
    "The new throttle definitions system file were invalid, and no more specific error could be divined",
  ACCOUNT_EXPIRED_AND_PENDING_REMOVAL:
    "The transaction references an account which has passed its expiration without renewal funds available, and currently remains in the ledger only because of the grace period given to expired entities",
  INVALID_TOKEN_MAX_SUPPLY: "Invalid token max supply",
  INVALID_TOKEN_NFT_SERIAL_NUMBER: "Invalid token nft serial number",
  INVALID_NFT_ID: "Invalid nft id",
  METADATA_TOO_LONG: "Nft metadata is too long",
  BATCH_SIZE_LIMIT_EXCEEDED: "Repeated operations count exceeds the limit",
  INVALID_QUERY_RANGE:
    "The range of data to be gathered is out of the set boundaries",
  FRACTION_DIVIDES_BY_ZERO: "A custom fractional fee set a denominator of zero",
  INSUFFICIENT_PAYER_BALANCE_FOR_CUSTOM_FEE:
    "The transaction payer could not afford a custom fee",
  CUSTOM_FEES_LIST_TOO_LONG: "More than 10 custom fees were specified",
  INVALID_CUSTOM_FEE_COLLECTOR:
    "Any of the feeCollector accounts for customFees is invalid",
  INVALID_TOKEN_ID_IN_CUSTOM_FEES:
    "Any of the token Ids in customFees is invalid",
  TOKEN_NOT_ASSOCIATED_TO_FEE_COLLECTOR:
    "Any of the token Ids in customFees are not associated to feeCollector",
  TOKEN_MAX_SUPPLY_REACHED:
    "A token cannot have more units minted due to its configured supply ceiling",
  SENDER_DOES_NOT_OWN_NFT_SERIAL_NO:
    "The transaction attempted to move an NFT serial number from an account other than its owner",
  CUSTOM_FEE_NOT_FULLY_SPECIFIED:
    "A custom fee schedule entry did not specify either a fixed or fractional fee",
  CUSTOM_FEE_MUST_BE_POSITIVE:
    "Only positive fees may be assessed at this time",
  TOKEN_HAS_NO_FEE_SCHEDULE_KEY: "Fee schedule key is not set on token",
  CUSTOM_FEE_OUTSIDE_NUMERIC_RANGE:
    "A fractional custom fee exceeded the range of a 64-bit signed integer",
  ROYALTY_FRACTION_CANNOT_EXCEED_ONE:
    "A royalty cannot exceed the total fungible value exchanged for an NFT",
  FRACTIONAL_FEE_MAX_AMOUNT_LESS_THAN_MIN_AMOUNT:
    "Each fractional custom fee must have its maximum_amount, if specified, at least its minimum_amount",
  CUSTOM_SCHEDULE_ALREADY_HAS_NO_FEES:
    "A fee schedule update tried to clear the custom fees from a token whose fee schedule was already empty",
  CUSTOM_FEE_DENOMINATION_MUST_BE_FUNGIBLE_COMMON:
    "Only tokens of type FUNGIBLE_COMMON can be used to as fee schedule denominations",
  CUSTOM_FRACTIONAL_FEE_ONLY_ALLOWED_FOR_FUNGIBLE_COMMON:
    "Only tokens of type FUNGIBLE_COMMON can have fractional fees",
  INVALID_CUSTOM_FEE_SCHEDULE_KEY:
    "The provided custom fee schedule key was invalid",
  INVALID_TOKEN_MINT_METADATA: "The requested token mint metadata was invalid",
  INVALID_TOKEN_BURN_METADATA: "The requested token burn metadata was invalid",
  CURRENT_TREASURY_STILL_OWNS_NFTS:
    "The treasury for a unique token cannot be changed until it owns no NFTs",
  ACCOUNT_STILL_OWNS_NFTS:
    "An account cannot be dissociated from a unique token if it owns NFTs for the token",
  TREASURY_MUST_OWN_BURNED_NFT:
    "A NFT can only be burned when owned by the unique token's treasury",
  ACCOUNT_DOES_NOT_OWN_WIPED_NFT: "An account did not own the NFT to be wiped",
  ACCOUNT_AMOUNT_TRANSFERS_ONLY_ALLOWED_FOR_FUNGIBLE_COMMON:
    "An AccountAmount token transfers list referenced a token type other than FUNGIBLE_COMMON",
  MAX_NFTS_IN_PRICE_REGIME_HAVE_BEEN_MINTED:
    "All the NFTs allowed in the current price regime have already been minted",
  PAYER_ACCOUNT_DELETED: "The payer account has been marked as deleted",
  CUSTOM_FEE_CHARGING_EXCEEDED_MAX_RECURSION_DEPTH:
    "The reference chain of custom fees for a transferred token exceeded the maximum length of 2",
  CUSTOM_FEE_CHARGING_EXCEEDED_MAX_ACCOUNT_AMOUNTS:
    "More than 20 balance adjustments were to satisfy a CryptoTransfer and its implied custom fee payments",
  INSUFFICIENT_SENDER_ACCOUNT_BALANCE_FOR_CUSTOM_FEE:
    "The sender account in the token transfer transaction could not afford a custom fee",
  SERIAL_NUMBER_LIMIT_REACHED:
    "Currently no more than 4,294,967,295 NFTs may be minted for a given unique token type",
  CUSTOM_ROYALTY_FEE_ONLY_ALLOWED_FOR_NON_FUNGIBLE_UNIQUE:
    "Only tokens of type NON_FUNGIBLE_UNIQUE can have royalty fees",
  NO_REMAINING_AUTOMATIC_ASSOCIATIONS:
    "The account has reached the limit on the automatic associations count.",
  EXISTING_AUTOMATIC_ASSOCIATIONS_EXCEED_GIVEN_LIMIT:
    "Already existing automatic associations are more than the new maximum automatic associations.",
  REQUESTED_NUM_AUTOMATIC_ASSOCIATIONS_EXCEEDS_ASSOCIATION_LIMIT:
    "Cannot set the number of automatic associations for an account more than the maximum allowed token associations <tt>tokens.maxPerAccount</tt>.",
  TOKEN_IS_PAUSED:
    "Token is paused. This Token cannot be a part of any kind of Transaction until unpaused.",
  TOKEN_HAS_NO_PAUSE_KEY: "Pause key is not set on token",
  INVALID_PAUSE_KEY: "The provided pause key was invalid",
  FREEZE_UPDATE_FILE_DOES_NOT_EXIST:
    "The update file in a freeze transaction body must exist.",
  FREEZE_UPDATE_FILE_HASH_DOES_NOT_MATCH:
    "The hash of the update file in a freeze transaction body must match the in-memory hash.",
  NO_UPGRADE_HAS_BEEN_PREPARED:
    "A FREEZE_UPGRADE transaction was handled with no previous update prepared.",
  NO_FREEZE_IS_SCHEDULED:
    "A FREEZE_ABORT transaction was handled with no scheduled freeze.",
  UPDATE_FILE_HASH_CHANGED_SINCE_PREPARE_UPGRADE:
    "The update file hash when handling a FREEZE_UPGRADE transaction differs from the file hash at the time of handling the PREPARE_UPGRADE transaction.",
  FREEZE_START_TIME_MUST_BE_FUTURE:
    "The given freeze start time was in the (consensus) past.",
  PREPARED_UPDATE_FILE_IS_IMMUTABLE:
    "The prepared update file cannot be updated or appended until either the upgrade has been completed, or a FREEZE_ABORT has been handled.",
  FREEZE_ALREADY_SCHEDULED:
    "Once a freeze is scheduled, it must be aborted before any other type of freeze can can be performed.",
  FREEZE_UPGRADE_IN_PROGRESS:
    "If an NMT upgrade has been prepared, the following operation must be a FREEZE_UPGRADE. (To issue a FREEZE_ONLY, submit a FREEZE_ABORT first.)",
  UPDATE_FILE_ID_DOES_NOT_MATCH_PREPARED:
    "If an NMT upgrade has been prepared, the subsequent FREEZE_UPGRADE transaction must confirm the id of the file to be used in the upgrade.",
  UPDATE_FILE_HASH_DOES_NOT_MATCH_PREPARED:
    "If an NMT upgrade has been prepared, the subsequent FREEZE_UPGRADE transaction must confirm the hash of the file to be used in the upgrade.",
  CONSENSUS_GAS_EXHAUSTED:
    "Consensus throttle did not allow execution of this transaction. System is throttled at consensus level.",
  REVERTED_SUCCESS: "A precompiled contract succeeded, but was later reverted.",
  MAX_STORAGE_IN_PRICE_REGIME_HAS_BEEN_USED:
    "All contract storage allocated to the current price regime has been consumed.",
  INVALID_ALIAS_KEY:
    "An alias used in a CryptoTransfer transaction is not the serialization of a primitive Key message--that is, a Key with a single Ed25519 or ECDSA(secp256k1) public key and no unknown protobuf fields.",
  UNEXPECTED_TOKEN_DECIMALS:
    "A fungible token transfer expected a different number of decimals than the involved type actually has.",
  INVALID_PROXY_ACCOUNT_ID:
    "The proxy account id is invalid or does not exist.",
  INVALID_TRANSFER_ACCOUNT_ID:
    "The transfer account id in CryptoDelete transaction is invalid or does not exist.",
  INVALID_FEE_COLLECTOR_ACCOUNT_ID:
    "The fee collector account id in TokenFeeScheduleUpdate is invalid or does not exist.",
  ALIAS_IS_IMMUTABLE:
    "The alias already set on an account cannot be updated using CryptoUpdate transaction.",
  SPENDER_ACCOUNT_SAME_AS_OWNER:
    "An approved allowance specifies a spender account that is the same as the hbar/token owner account.",
  AMOUNT_EXCEEDS_TOKEN_MAX_SUPPLY:
    "The establishment or adjustment of an approved allowance cause the token allowance to exceed the token maximum supply.",
  NEGATIVE_ALLOWANCE_AMOUNT:
    "The specified amount for an approved allowance cannot be negative.",
  CANNOT_APPROVE_FOR_ALL_FUNGIBLE_COMMON:
    "The approveForAll flag cannot be set for a fungible token.",
  SPENDER_DOES_NOT_HAVE_ALLOWANCE:
    "The spender does not have an existing approved allowance with the hbar/token owner.",
  AMOUNT_EXCEEDS_ALLOWANCE:
    "The transfer amount exceeds the current approved allowance for the spender account.",
  MAX_ALLOWANCES_EXCEEDED:
    "The payer account of an approveAllowances or adjustAllowance transaction is attempting to go beyond the maximum allowed number of allowances.",
  EMPTY_ALLOWANCES:
    "No allowances have been specified in the approval/adjust transaction.",
  SPENDER_ACCOUNT_REPEATED_IN_ALLOWANCES:
    "Spender is repeated more than once in Crypto or Token or NFT allowance lists in a single CryptoApproveAllowance or CryptoAdjustAllowance transaction.",
  REPEATED_SERIAL_NUMS_IN_NFT_ALLOWANCES:
    "Serial numbers are repeated in nft allowance for a single spender account",
  FUNGIBLE_TOKEN_IN_NFT_ALLOWANCES:
    "Fungible common token used in NFT allowances",
  NFT_IN_FUNGIBLE_TOKEN_ALLOWANCES:
    "Non fungible token used in fungible token allowances",
  INVALID_ALLOWANCE_OWNER_ID:
    "The account id specified as the owner is invalid or does not exist.",
  INVALID_ALLOWANCE_SPENDER_ID:
    "The account id specified as the spender is invalid or does not exist.",
  REPEATED_ALLOWANCES_TO_DELETE:
    "If the CryptoDeleteAllowance transaction has repeated crypto or token or Nft allowances to delete.",
  INVALID_DELEGATING_SPENDER:
    "If the account Id specified as the delegating spender is invalid or does not exist.",
  DELEGATING_SPENDER_CANNOT_GRANT_APPROVE_FOR_ALL:
    "The delegating Spender cannot grant approveForAll allowance on a NFT token type for another spender.",
  DELEGATING_SPENDER_DOES_NOT_HAVE_APPROVE_FOR_ALL:
    "The delegating Spender cannot grant allowance on a NFT serial for another spender as it doesnt not have approveForAll granted on token-owner.",
  SCHEDULE_EXPIRATION_TIME_TOO_FAR_IN_FUTURE:
    "The scheduled transaction could not be created because it's expiration_time was too far in the future.",
  SCHEDULE_EXPIRATION_TIME_MUST_BE_HIGHER_THAN_CONSENSUS_TIME:
    "The scheduled transaction could not be created because it's expiration_time was less than or equal to the consensus time.",
  SCHEDULE_FUTURE_THROTTLE_EXCEEDED:
    "The scheduled transaction could not be created because it would cause throttles to be violated on the specified expiration_time.",
  SCHEDULE_FUTURE_GAS_LIMIT_EXCEEDED:
    "The scheduled transaction could not be created because it would cause the gas limit to be violated on the specified expiration_time.",
  INVALID_ETHEREUM_TRANSACTION:
    "The ethereum transaction either failed parsing or failed signature validation, or some other EthereumTransaction error not covered by another response code.",
  WRONG_CHAIN_ID:
    "EthereumTransaction was signed against a chainId that this network does not support.",
  WRONG_NONCE:
    "This transaction specified an ethereumNonce that is not the current ethereumNonce of the account.",
  ACCESS_LIST_UNSUPPORTED:
    "The ethereum transaction specified an access list, which the network does not support.",
  SCHEDULE_PENDING_EXPIRATION:
    "The scheduled transaction is pending expiration.",
  CONTRACT_IS_TOKEN_TREASURY:
    "A selfdestruct or ContractDelete targeted a contract that is a token treasury.",
  CONTRACT_HAS_NON_ZERO_TOKEN_BALANCES:
    "A selfdestruct or ContractDelete targeted a contract with non-zero token balances.",
  CONTRACT_EXPIRED_AND_PENDING_REMOVAL:
    'A contract referenced by a transaction is "detached"; that is, expired and lacking any hbar funds for auto-renewal payment---but still within its post-expiry grace period.',
  CONTRACT_HAS_NO_AUTO_RENEW_ACCOUNT:
    "A ContractUpdate requested removal of a contract's auto-renew account, but that contract has no auto-renew account.",
  PERMANENT_REMOVAL_REQUIRES_SYSTEM_INITIATION:
    "A delete transaction submitted via HAPI set permanent_removal=true",
  PROXY_ACCOUNT_ID_FIELD_IS_DEPRECATED:
    "A CryptoCreate or ContractCreate used the deprecated proxyAccountID field.",
  SELF_STAKING_IS_NOT_ALLOWED:
    "An account set the staked_account_id to itself in CryptoUpdate or ContractUpdate transactions.",
  INVALID_STAKING_ID:
    "The staking account id or staking node id given is invalid or does not exist.",
  STAKING_NOT_ENABLED:
    "Native staking, while implemented, has not yet enabled by the council.",
  INVALID_PRNG_RANGE: "The range provided in PRNG transaction is negative.",
  MAX_ENTITIES_IN_PRICE_REGIME_HAVE_BEEN_CREATED:
    "The maximum number of entities allowed in the current price regime have been created.",
  INVALID_FULL_PREFIX_SIGNATURE_FOR_PRECOMPILE:
    "The full prefix signature for precompile is not valid",
  INSUFFICIENT_BALANCES_FOR_STORAGE_RENT:
    "The combined balances of a contract and its auto-renew account (if any) did not cover the rent charged for net new storage used in a transaction.",
  MAX_CHILD_RECORDS_EXCEEDED:
    "A contract transaction tried to use more than the allowed number of child records, via either system contract records or internal contract creations.",
  INSUFFICIENT_BALANCES_FOR_RENEWAL_FEES:
    "The combined balances of a contract and its auto-renew account (if any) or balance of an account did not cover the auto-renewal fees in a transaction.",
};

export default hederaStatusCodes;
